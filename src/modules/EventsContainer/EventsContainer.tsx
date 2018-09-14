import React, { Component } from 'react';
import Events from '../../components/Events/Events';
import {
	getCachedUpcomingEvents,
	getCachedPastEvents,
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
	};

	public componentDidMount() {
		this.fetchEvents();
	}

	public render() {
		return (
			<Events
				nextMeetupEvents={this.state.nextMeetupEvents}
				noNextMeetupEvent={this.state.noNextMeetupEvent}
				pastMeetupEvents={this.state.pastMeetupEvents}
			/>
		);
	}

	private async fetchEvents() {
		try {
			const response = await getCachedUpcomingEvents();
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
			const response = await getCachedPastEvents();
			const pastMeetupEvents = response.map(convertEventResponseToModel());
			this.setState({ pastMeetupEvents });
		} catch (err) {
			this.setState({ pastMeetupEvents: [] });
		}
	}
}
