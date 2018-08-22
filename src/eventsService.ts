const GET_UPCOMING_EVENTS_URL =
	'https://2sif0durcj.execute-api.eu-west-1.amazonaws.com/dev/get-upcoming-events';

let cachedUpcomingEvents: any[];

async function fetchUpcomingEvents() {
	try {
		let url = GET_UPCOMING_EVENTS_URL;
		if (process.env.REACT_APP_STAGE === 'dev') {
			url = '/mock/getUpcomingEvents.json';
		}
		cachedUpcomingEvents = await fetch(url).then(data => data.json());
		return cachedUpcomingEvents;
	} catch (err) {
		// fail silently
		return null;
	}
}

// Should be drop-in replaceable with Redux Thunk
export async function getCachedUpcomingEvents() {
	return cachedUpcomingEvents ? cachedUpcomingEvents : fetchUpcomingEvents();
}
