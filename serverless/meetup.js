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
const FALLBACK_IMAGE = 'https://res.cloudinary.com/codestar/image/upload/v1532409289/codestar.nl/meetup/codestar-night-logo.jpg';

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
		const mEvents = response.body.map(({ name, time, link, description, featured_photo}) => {
			return {
				name,
				time,
				link,
				description,
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
		const mEvents = response.body
			.map(({ name, time, link, featured_photo}) => {
				return {
					name,
					time,
					link,
					featured_photo
				}
			})
			.map(async (mEvent) => {
				// If Meetup.com does not have a featured_photo, try to fallback to a Cloudinary image
				if(!mEvent.featured_photo) {
					// Check if Cloudinary image exists
					const cleanName = mEvent.name.replace(/[^\w]/g, '');
					const photoUrl = `https://res.cloudinary.com/codestar/image/upload/e_art:fes,c_fill,h_170,w_300/v1532409289/codestar.nl/meetup/${cleanName}`;
					try {
						// TODO this should be done with Promise.all, but only if got was really called and not if there already was a featured_photo
						const result = (await got.head(photoUrl, {json: true})).headers;
						const hasValidLength = parseInt(result['content-length'], 10) > 0;
						console.log(photoUrl, 'exists?', hasValidLength)
						if(hasValidLength) {
							return Object.assign({}, mEvent, {
								featured_photo: {
									photo_link: photoUrl
								}
							})
						} else {
							throw new Error('No image found or parsing failed')
						}
					} catch(err) {
						console.log(photoUrl, 'does not exist')
						// Use the fallback image
						return Object.assign({}, mEvent, {
							featured_photo: {
								photo_link: FALLBACK_IMAGE
							}
						})
					}
				}
				return mEvent;
			});


		// // TODO if featured_photo is missing, try to get an alternative from Cloudinary, else leave out the property
		// const mEvWithoutPhoto = mEvents
		// 	.filter(mEvent => !mEvent.featured_photo)
		// 	.map(async (mEvent) => {
		// 		// Check if Cloudinary image exists
		// 		const cleanName = mEvent.name.replace(/[^\w]/g, '');
		// 		const photoUrl = `https://res.cloudinary.com/codestar/image/upload/v1532409289/codestar.nl/meetup/${cleanName}`;
		// 		try {
		// 			const result = (await got.head(photoUrl, {json: true})).headers;
		// 			const hasValidLength = parseInt(result['content-length'], 10) > 0;
		// 			console.log(photoUrl, 'exists?', hasValidLength)
		// 			if(hasValidLength) {
		// 				return Object.assign({}, mEvent, {
		// 					featured_photo: {
		// 						photo_link: photoUrl
		// 					}
		// 				})
		// 			}
		// 		} catch(err) {
		// 			console.log(photoUrl, 'does not exist')
		// 		}
		// 		return mEvent; //result.exists;
		// 	});
		//console.log(mEvWithoutPhoto)

		callback(null, {
			statusCode: 200,
			headers,
			body: JSON.stringify(mEvents),
		});
	} catch(err) {
		console.log(err)
		callback('Failed GET_UPCOMING_EVENTS_URL ' + err);
	}
};