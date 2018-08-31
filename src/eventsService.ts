import { IMeetupEvent } from './modules/EventsContainer/EventsContainer.interfaces';

const GET_UPCOMING_EVENTS_URL =
	'https://2sif0durcj.execute-api.eu-west-1.amazonaws.com/dev/get-upcoming-events';
const GET_PAST_EVENTS_URL =
	'https://2sif0durcj.execute-api.eu-west-1.amazonaws.com/dev/get-past-events';

let cachedUpcomingEvents: IMeetupEvent[] = [];
let cachedPastEvents: IMeetupEvent[] = [];

async function fetchUpcomingEvents(): Promise<IMeetupEvent[]> {
	try {
		let url = GET_UPCOMING_EVENTS_URL;
		if (process.env.REACT_APP_STAGE === 'dev') {
			url = '/mock/getUpcomingEvents.json';
		}
		cachedUpcomingEvents = await fetch(url).then(data => data.json());
		return cachedUpcomingEvents;
	} catch (err) {
		// fail silently
		return [];
	}
}

// Should be drop-in replaceable with Redux Thunk
export async function getCachedUpcomingEvents(): Promise<IMeetupEvent[]> {
	return cachedUpcomingEvents.length
		? cachedUpcomingEvents
		: fetchUpcomingEvents();
}

async function fetchPastEvents(): Promise<IMeetupEvent[]> {
	try {
		let url = GET_PAST_EVENTS_URL;
		if (process.env.REACT_APP_STAGE === 'dev') {
			url = '/mock/getPastEvents.json';
		}
		cachedPastEvents = await fetch(url).then(data => data.json());
		return cachedPastEvents;
	} catch (err) {
		// fail silently
		return [];
	}
}

export async function getCachedPastEvents() {
	return cachedPastEvents.length ? cachedPastEvents : fetchPastEvents();
}
