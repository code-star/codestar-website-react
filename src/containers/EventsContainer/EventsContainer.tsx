import React, { Component } from 'react';
import Events from '../../components/Molecules/List/Events';
import {
  getCachedUpcomingEvents,
  getCachedPastEvents,
  getCachedRecentTweets,
} from '../../eventsService';
import {
  IEventsContainerState,
  ITweet,
  ITwitterUser,
} from './EventsContainer.interfaces';
import { convertEventResponseToModel } from './EventsContainer.helpers';
import { fetchYouTubePlaylist } from './fetchYouTubePlaylist';

export default class EventsContainer extends Component<
  {},
  IEventsContainerState
> {
  public state: IEventsContainerState = {
    nextMeetupEvents: [],
    loadingNextMeetupEvent: true,
    noNextMeetupEvent: false,
    pastMeetupEvents: [],
    recentTweets: null,
    videos: [],
  };

  public componentDidMount() {
    this.fetchEvents();
    this.fetchRecentTweets();
    this.fetchVideos();
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

  private filterRecentTweets(tweets: { data: ITweet[]; author: ITwitterUser }) {
    const newData = tweets.data.filter(
      (tweet: ITweet) =>
        !tweet.text.includes('RT ') && !tweet.text.startsWith('@')
    );
    return {
      ...tweets,
      data: newData,
    };
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
      this.setState({ recentTweets: null });
    }
  }

  private async fetchVideos() {
    const videos = await fetchYouTubePlaylist();
    this.setState({
      videos,
    });
  }
}
