'use strict';

const allowedOrigin = 'https://www.codestar.nl';

// Response headers
const headers = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': allowedOrigin,
};

// const GET_UPCOMING_EVENTS_URL =
// 	'https://api.meetup.com/Code-Star-Night/events?photo-host=secure&page=3&sig_id=226887185&status=upcoming&sig=e3efc6db037cf681181d84ae343459a36afbefd4';
const GET_UPCOMING_EVENTS_URL = 'https://api.meetup.com/Code-Star-Night/events?&sign=true&photo-host=public&page=20&desc=true&status=past';

module.exports.getUpcomingEvents = async (event, context, callback) => {
	// TODO origin check

	// TODO with await

	const data = await fetch(GET_UPCOMING_EVENTS_URL, {
		method: 'GET'
	});
	const resolvedData = await data.json();
	// const ids = resolvedData.map(meetupEvent => {
	// 	// TODO conditionally get event details, most importantly the image URL
	// 	console.log(meetupEvent.name);
	// 	return meetupEvent.id;
	// });
	const meetupEventPromises = resolvedData.map(meetupEvent => {
		// TODO conditionally get event details, most importantly the image URL
		console.log(meetupEvent.name);
		return fetch(`https://api.meetup.com/Code-Star-Night/events/${meetupEvent.id}?&sign=true&photo-host=public&fields=featured_photo`, {method: 'GET'});
	});
	const eventDetailsData = await meetupEventPromises[0]; // TODO convert to Promise.all
	const eventDetailsDataResolved = await eventDetailsData.json();
	console.log(eventDetailsDataResolved.featured_photo.photo_link);
	// TODO with zip?
	const newData = {
		id: resolvedData[0].id,
		name: resolvedData[0].name,
		photo: eventDetailsDataResolved.featured_photo.photo_link
	};
	callback(null, {
		statusCode: 200,
		headers,
		body: JSON.stringify({
			message: newData,
		}),
	});

	// fetch(GET_UPCOMING_EVENTS_URL, {
	// 	method: 'GET'
	// })
	// 	.then(data => data.json())
	// 	.then(data => {
	// 		const ids = data.map(meetupEvent => {
	// 			// TODO conditionally get event details, most importantly the image URL
	// 			console.log(meetupEvent.name);
	// 			return meetupEvent.id;
	// 		});
	// 		// console.log(promises);
	// 		// return promises[0];
	// 		return fetch(`https://api.meetup.com/Code-Star-Night/events/${ids[0]}?&sign=true&photo-host=public&fields=featured_photo`, {method: 'GET'});
	// 	})
	// 	.then(data => data.json())
	// 	.then(data => console.log(data.featured_photo.photo_link))
};
