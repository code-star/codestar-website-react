'use strict';

// Use `got` instead of using `https` (intransparent syntax) or `request-promise` (bloated)
const got = require('got');

// API calls only over HTTPS!
const allowedOrigin = 'https://www.codestar.nl';

// Response headers
const headers = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': allowedOrigin,
};

const GET_UPCOMING_EVENTS_URL = 'https://api.meetup.com/Code-Star-Night/events?&sign=true&photo-host=public&page=3&fields=featured_photo&desc=true';
const GET_PAST_EVENTS_URL = 'https://api.meetup.com/Code-Star-Night/events?&sign=true&photo-host=public&page=20&desc=true&status=past&fields=featured_photo';

module.exports.getUpcomingEvents = async (event, context, callback) => {
	const allowedOrigins = [allowedOrigin];
	const debug = process.env.DEBUG;
	if(debug === 'true') {
		allowedOrigins.push('http://localhost:3000');
	}

	try {
		if(!allowedOrigins.includes(event.headers.origin)) {
			throw new Error(`Not white-listed origin: ${event.headers.origin}`);
		}

		const response = await got(GET_UPCOMING_EVENTS_URL, { json: true });
		const mEvents = response.body.map(({ name, time, link, featured_photo}) => {
			return {
				name,
				time,
				link,
				featured_photo
			}
		});
		callback(null, {
			statusCode: 200,
			headers,
			body: JSON.stringify(mEvents),
		});
	} catch(err) {
		callback('Failed GET_UPCOMING_EVENTS_URL ' + err);
	}

	// const data = await fetch(GET_UPCOMING_EVENTS_URL, {
	// 	method: 'GET'
	// });
	// const resolvedData = await data.json();
	// // const ids = resolvedData.map(meetupEvent => {
	// // 	// TODO conditionally get event details, most importantly the image URL
	// // 	console.log(meetupEvent.name);
	// // 	return meetupEvent.id;
	// // });
	// const meetupEventPromises = resolvedData.map(meetupEvent => {
	// 	// TODO conditionally get event details, most importantly the image URL
	// 	console.log(meetupEvent.name);
	// 	return fetch(`https://api.meetup.com/Code-Star-Night/events/${meetupEvent.id}?&sign=true&photo-host=public&fields=featured_photo`, {method: 'GET'});
	// });
	// // TODO limit to e.g. 20
	// // TODO show placeholders
	// const eventDetailsData = await meetupEventPromises[0]; // TODO convert to Promise.all
	// const eventDetailsDataResolved = await eventDetailsData.json();
	// console.log(eventDetailsDataResolved.featured_photo.photo_link);
	// // TODO with zip?
	// const newData = {
	// 	id: resolvedData[0].id,
	// 	name: resolvedData[0].name,
	// 	photo: eventDetailsDataResolved.featured_photo.photo_link
	// };
	// callback(null, {
	// 	statusCode: 200,
	// 	headers,
	// 	body: JSON.stringify({
	// 		message: newData,
	// 	}),
	// });
};
