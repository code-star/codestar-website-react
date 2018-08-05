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

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
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
};

module.exports.getPastEvents = async (event, context, callback) => {
	const allowedOrigins = [allowedOrigin];
	const debug = process.env.DEBUG;
	if(debug === 'true') {
		allowedOrigins.push('http://localhost:3000');
	}

	try {
		if(!allowedOrigins.includes(event.headers.origin)) {
			throw new Error(`Not white-listed origin: ${event.headers.origin}`);
		}

		const response = await got(GET_PAST_EVENTS_URL, { json: true });
		const mEvents = response.body.map(({ name, time, link, featured_photo}) => {
			return {
				name,
				time,
				link,
				featured_photo
			}
		});
		// TODO if featured_photo is missing, try to get an alternative from Cloudinary, else leave out the property
		callback(null, {
			statusCode: 200,
			headers,
			body: JSON.stringify(mEvents),
		});
	} catch(err) {
		callback('Failed GET_UPCOMING_EVENTS_URL ' + err);
	}
};