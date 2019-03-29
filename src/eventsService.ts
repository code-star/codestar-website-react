import { IMeetupEvent, ITweet } from './containers/EventsContainer/EventsContainer.interfaces'

let cachedUpcomingEvents: IMeetupEvent[] = []
let cachedPastEvents: IMeetupEvent[] = []
let cachedRecentTweets: ITweet[]

// This has been wrapped in a function to able to run unit tests where process.env.REACT_APP_STAGE is changed
function getUrl(lambdaName: string): string {
  if (process.env.REACT_APP_STAGE === 'dev') {
    return `/mock/${lambdaName}.json`
  }
  const AWS_PREFIX = process.env.REACT_APP_STAGE === 'test' ? 'hjoutysc5k' : '267sder6c7'
  const AWS_STAGE = process.env.REACT_APP_STAGE === 'test' ? 'test' : 'prod'
  return `https://${AWS_PREFIX}.execute-api.eu-west-1.amazonaws.com/${AWS_STAGE}/${lambdaName}`
}

async function fetchUpcomingEvents(): Promise<IMeetupEvent[]> {
  try {
    const url = getUrl('get-upcoming-events')
    cachedUpcomingEvents = await fetch(url).then(data => data.json())
    return cachedUpcomingEvents
  } catch (err) {
    // fail silently
    return []
  }
}

// Should be drop-in replaceable with Redux Thunk
export async function getCachedUpcomingEvents(): Promise<IMeetupEvent[]> {
  return cachedUpcomingEvents.length ? cachedUpcomingEvents : fetchUpcomingEvents()
}

async function fetchPastEvents(): Promise<IMeetupEvent[]> {
  try {
    const url = getUrl('get-past-events')
    cachedPastEvents = await fetch(url).then(data => data.json())
    return cachedPastEvents
  } catch (err) {
    // fail silently
    return []
  }
}

export async function getCachedPastEvents(): Promise<IMeetupEvent[]> {
  return cachedPastEvents.length ? cachedPastEvents : fetchPastEvents()
}

async function fetchRecentTweets(): Promise<ITweet[]> {
  try {
    const url = getUrl('get-recent-tweets')
    cachedRecentTweets = await fetch(url).then(data => data.json())
    cachedRecentTweets = typeof cachedRecentTweets === 'string' ? JSON.parse(cachedRecentTweets) : cachedRecentTweets
    return cachedRecentTweets
  } catch (err) {
    // fail silently
    return []
  }
}

export async function getCachedRecentTweets(): Promise<ITweet[]> {
  return cachedRecentTweets ? cachedRecentTweets : fetchRecentTweets()
}
