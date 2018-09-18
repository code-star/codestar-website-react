'use strict';

// Use `got` instead of using `https` (intransparent syntax) or `request-promise` (bloated)
const got = require('got');
const util = require('./util');
const OAuth = require('oauth');

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
const GET_UPCOMING_EVENTS_URL = 'https://api.meetup.com/Code-Star-Night/events?&sign=true&photo-host=public&page=3&fields=featured_photo&desc=false';
const GET_PAST_EVENTS_URL = 'https://api.meetup.com/Code-Star-Night/events?&sign=true&photo-host=public&page=20&desc=true&status=past&fields=featured_photo';
const FALLBACK_IMAGE = 'https://res.cloudinary.com/codestar/image/upload/v1532409289/codestar.nl/meetup/codestar-night-logo.jpg';
const {SCREEN_NAME, TWEET_COUNT} = process.env;
const GET_RECENT_TWEETS_URL = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${SCREEN_NAME}&count=${TWEET_COUNT}`;


module.exports.getUpcomingEvents = async (event, context, callback) => {
  try {
    const headers = util.safeGetHeaders(event.headers.origin);
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
    console.log(err, err.stack);
    callback('Failed GET_UPCOMING_EVENTS ' + err);
  }
};

function pluckEventProperties({name, time, link, featured_photo}) {
  return {
    name,
    time,
    link,
    featured_photo
  };
}

async function addEventPhoto({featured_photo, ...mEventWithoutPhoto}) {
  const resolvedPhoto = featured_photo ? featured_photo : await getEventPhoto(mEventWithoutPhoto);
  return {
    featured_photo: resolvedPhoto,
    ...mEventWithoutPhoto
  };
}

async function getEventPhoto(mEventWithoutPhoto) {
  // Generate a valid file name
  const cleanName = mEventWithoutPhoto.name.replace(/[^\w]/g, '');
  const photoUrl = `https://res.cloudinary.com/codestar/image/upload/e_art:fes,c_fill,h_170,w_300/v1533472199/codestar.nl/meetup/${cleanName}`;
  // Check if Cloudinary image exists
  try {
    const imgHead = await got.head(photoUrl, {json: true});
    const hasValidLength = parseInt(imgHead.headers['content-length'], 10) > 0;
    if(hasValidLength) {
      return {
          photo_link: photoUrl
      };
    } else {
      throw new Error('No image found or parsing failed');
    }
  } catch (err) {
    // E.g. 404 because not found
    return Promise.resolve({
      photo_link: FALLBACK_IMAGE
    })
  }
}

module.exports.getPastEvents = async (event, context, callback) => {
  try {
    const headers = util.safeGetHeaders(event.headers.origin);
    const response = await got(GET_PAST_EVENTS_URL, { json: true });
    const mEvents = await response.body;
    // If Meetup.com does not have a featured_photo, try to fallback to a Cloudinary image
    const mEventsWithGuaranteedPhoto = await Promise.all(mEvents.map(pluckEventProperties).map(addEventPhoto));
    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify(mEventsWithGuaranteedPhoto),
    });
  } catch(err) {
    console.log(err, err.stack);
    callback('Failed GET_PAST_EVENTS ' + err);
  }
};

module.exports.getRecentTweets = (event, context, callback) => {
  const headers = util.safeGetHeaders(event.headers.origin);
  const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'tjJCNag24jknOpsk9BTs0Tour',
    'C9aNnCfb9tigjfMk34kknq7Cd9oAtW9TW77m2YJBQxv2smZQ5U',
    '1.0',
    '',
    'HMAC-SHA1'
  );

  const authCallback = (error, data, result) => {
    if (error) {
      callback(`Failed GET_RECENT_TWEETS_URL ${error}`);
      return;
    }
    try {
      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(data),
      });
    } catch (parseError) {
      console.log(parseError);
    }
   }

  oauth.get(
    GET_RECENT_TWEETS_URL,
    '132144715-JB0dtp503oGA0ArDsZ0r4oFsh9GcaQRAvc1Xqyyw',
    '9wCdiAuuzIWFdeAE6gL4hzjV5Rsj1ZLQzyjFC5aKDjHMN',
    authCallback
  );
};
