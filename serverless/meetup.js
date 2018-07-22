'use strict';

const GET_UPCOMING_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?photo-host=secure&page=3&sig_id=226887185&status=upcoming&sig=e3efc6db037cf681181d84ae343459a36afbefd4';

module.exports.getUpcomingEvents = async (event, context, callback) => {
	// TODO origin check

	fetch(GET_UPCOMING_EVENTS_URL, {
		method: 'GET'
	})
		.then(data => data.json())
		.then(data => {
			data.forEach(meetupEvent => {
				// TODO conditionally get event details, most importantly the image URL
				console.log(meetupEvent.name)
			})
		})
};
