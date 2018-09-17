import React, { Component } from 'react';
import Events from '../../components/Molecules/List/Events';
import {
  getCachedUpcomingEvents,
  getCachedPastEvents,
  getCachedRecentTweets,
} from '../../eventsService';
import { IEventsContainerState } from './EventsContainer.interfaces';
import { convertEventResponseToModel } from './EventsContainer.helpers';

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
  };

  public componentDidMount() {
    this.fetchEvents();
    this.fetchRecentTweets();
  }

  public render() {
    return (
      <Events
        nextMeetupEvents={this.state.nextMeetupEvents}
        noNextMeetupEvent={this.state.noNextMeetupEvent}
        pastMeetupEvents={this.state.pastMeetupEvents}
        recentTweets={this.state.recentTweets}
      />
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
      this.setState({ recentTweets: response });
    } catch (err) {
      this.setState({ recentTweets: [] });
    }
  }
}
