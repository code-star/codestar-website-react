import React, { Component } from 'react';
import Events from '../../components/Molecules/List/Events';
import {
  getCachedUpcomingEvents,
  getCachedPastEvents,
  getCachedRecentTweets,
} from '../../eventsService';
import { IEventsContainerState } from './EventsContainer.interfaces';
import { convertEventResponseToModel } from './EventsContainer.helpers';
import { fetchYouTubePlaylist } from './fetchYouTubePlaylist';

const GOOGLE_API_KEY = 'AIzaSyDkTKtIGxMcyLX2IsfTpCvYr4n7WmMw3Jw';
const PLAYLIST_ID = 'PLy227h3xpH-FcHw79drVFiVGMRDU8YhLH';

export default class EventsContainer extends Component<
  {},
  IEventsContainerState
> {
  public state: IEventsContainerState = {
    nextMeetupEvents: [],
    loadingNextMeetupEvent: true,
    noNextMeetupEvent: false,
    pastMeetupEvents: [],
    recentTweets: [],
    videos: [],
  };

  public async componentDidMount() {
    this.fetchEvents();
    this.fetchRecentTweets();

    const videos = await fetchYouTubePlaylist(GOOGLE_API_KEY, PLAYLIST_ID);
    this.setState({
      videos,
    });
  }

  public render() {
    const {
      nextMeetupEvents,
      noNextMeetupEvent,
      pastMeetupEvents,
      recentTweets,
      videos,
    }: IEventsContainerState = this.state;

    return (
      <Events
        nextMeetupEvents={nextMeetupEvents}
        noNextMeetupEvent={noNextMeetupEvent}
        pastMeetupEvents={pastMeetupEvents}
        recentTweets={recentTweets}
        videos={videos}
      />
    );
  }

  private filterRecentTweets(tweets: any) {
    return tweets.filter(
      (tweet: any) => !tweet.text.includes('RT ') && !tweet.text.startsWith('@')
    );
  }

  private async fetchEvents() {
    try {
      const response: any = await getCachedUpcomingEvents();
      const nextMeetupEvents = response.map(convertEventResponseToModel(true));
      this.setState({
        nextMeetupEvents,
        loadingNextMeetupEvent: false,
        noNextMeetupEvent: !(nextMeetupEvents && nextMeetupEvents.length > 0),
      });
    } catch (err) {
      this.setState({
        nextMeetupEvents: [],
        loadingNextMeetupEvent: false,
        noNextMeetupEvent: true,
      });
    }

    try {
      const response: any = await getCachedPastEvents();
      const pastMeetupEvents = response.map(convertEventResponseToModel());
      this.setState({ pastMeetupEvents });
    } catch (err) {
      this.setState({ pastMeetupEvents: [] });
    }
  }

  private async fetchRecentTweets() {
    try {
      const response: any = await getCachedRecentTweets();

      const recentTweets = this.filterRecentTweets(response);

      this.setState({ recentTweets });
    } catch (err) {
      this.setState({ recentTweets: [] });
    }
  }
}
