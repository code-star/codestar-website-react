import {
  IMeetupEvent,
  ITweet,
} from './containers/EventsContainer/EventsContainer.interfaces';
import { getAzureUrl } from './utility/getAzureUrl';

let cachedUpcomingEvents: IMeetupEvent[] = [];
let cachedPastEvents: IMeetupEvent[] = [];
let cachedRecentTweets: ITweet[];

async function fetchUpcomingEvents(): Promise<IMeetupEvent[]> {
  try {
    const url = getAzureUrl('GetUpcomingEvents');
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
    const url = getAzureUrl('GetPastEvents');
    cachedPastEvents = await fetch(url).then(data => data.json());
    return cachedPastEvents;
  } catch (err) {
    // fail silently
    return [];
  }
}

export async function getCachedPastEvents(): Promise<IMeetupEvent[]> {
  return cachedPastEvents.length ? cachedPastEvents : fetchPastEvents();
}

async function fetchRecentTweets(): Promise<ITweet[]> {
  try {
    const url = getAzureUrl('GetTweets');
    cachedRecentTweets = await fetch(url).then(data => data.json());
    cachedRecentTweets =
      typeof cachedRecentTweets === 'string'
        ? JSON.parse(cachedRecentTweets)
        : cachedRecentTweets;
    return cachedRecentTweets;
  } catch (err) {
    // fail silently
    return [];
  }
}

export async function getCachedRecentTweets(): Promise<ITweet[]> {
  return cachedRecentTweets ? cachedRecentTweets : fetchRecentTweets();
}
