import React, { Component } from 'react';
import Events from '../../components/Events/Events';
import _ from 'lodash';

const GET_UPCOMING_EVENTS_URL =
	'https://2sif0durcj.execute-api.eu-west-1.amazonaws.com/dev/get-upcoming-events';
const GET_PAST_EVENTS_URL =
	'https://2sif0durcj.execute-api.eu-west-1.amazonaws.com/dev/get-past-events';

function convertEventResponseToModel(withDescription = false) {
	return function(mEvent) {
		const fallbackImage =
			'https://res.cloudinary.com/codestar/image/upload/v1532409289/codestar.nl/meetup/codestar-night-logo.jpg';
		const result = {
			name: mEvent.name,
			time: mEvent.time,
			link: mEvent.link,
			coverUrl: _.get(mEvent, 'featured_photo.photo_link', fallbackImage),
			withDescription,
		};
		if (withDescription) {
			Object.assign(result, {
				description: mEvent.description,
			});
		}
		return result;
	};
}

export default class EventsContainer extends Component {
	state = {
		nextEvent: {
			loading: true,
			event: null,
			noEvent: false,
		},
		pastEvents: [],
	};

	componentDidMount() {
		this.fetchEvents();
	}

	async fetchEvents() {
		/* Meetup API only allows JSONP for client-side, non authenticated, api key signed GET requests.
		   must use JSONP conform https://github.com/meetup/api/issues/211
		   Fetch API does not support JSONP. no-cors mode creates an opaque response without data.
		*/
		try {
			let url = GET_UPCOMING_EVENTS_URL;
			if (process.env.REACT_APP_STAGE === 'dev') {
				url = '/mock/getUpcomingEvents.json';
			}
			const response = await fetch(url).then(data => data.json());
			const result = _.head(response.map(convertEventResponseToModel(true)));
			const nextEvent = {
				loading: false,
				mEvent: result ? result : null,
				noEvent: !result,
			};
			this.setState({ nextEvent });
		} catch (err) {
			this.setState({
				nextEvent: {
					loading: false,
					event: null,
					noEvent: true,
				},
			});
		}

		try {
			let url = GET_PAST_EVENTS_URL;
			if (process.env.REACT_APP_STAGE === 'dev') {
				url = '/mock/getPastEvents.json';
			}
			const response = await fetch(url).then(data => data.json());
			const result = response.map(convertEventResponseToModel());
			this.setState({ pastEvents: result });
		} catch (err) {
			this.setState({ pastEvents: [] });
		}
	}

	render() {
		return (
			<Events
				nextEvent={this.state.nextEvent}
				pastEvents={this.state.pastEvents}
			/>
		);
	}
}
