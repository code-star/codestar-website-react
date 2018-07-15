import React, { Component } from 'react';
import { jsonp } from '../util';

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
// page=3 = number of results to return in a page, only need the first 3 results
const GET_UPCOMING_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?photo-host=secure&page=3&sig_id=226887185&status=upcoming&sig=e3efc6db037cf681181d84ae343459a36afbefd4';

const GET_PAST_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?desc=true&photo-host=secure&sig_id=226887185&status=past&sig=c81e4cfc6e9ea5056ccf091b976297e0fbee7b1f';

// function convertEventResponseToModel() {
//
// }
//
// function renderEventModel() {
//
// }

export class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nextEvent: '',
			pastEvents: [],
		};
		// TODO is this called every time when navigating to this page or only once per session (should be the latter)?
		this.fetchEvents = this.fetchEvents.bind(this);
		this.fetchEvents();
	}

	fetchEvents() {
		/* Meetup API only allows JSONP for client-side, non authenticated, api key signed GET requests.
		   must use JSONP conform https://github.com/meetup/api/issues/211
		   Fetch API does not support JSONP. no-cors mode creates an opaque response without data.
		*/
		jsonp(GET_UPCOMING_EVENTS_URL).then(response => {
			const nextEvent = response.data[0];
			if (nextEvent) {
				const formattedDate = new Date(nextEvent.time).toLocaleDateString(
					'en-US',
					{ month: 'long', day: 'numeric' }
				);
				const text = `${formattedDate} *Meetup* ${nextEvent.name}`;
				this.setState({ nextEvent: text });
			}
		});

		jsonp(GET_PAST_EVENTS_URL).then(response => {
			const result = response.data.map(mEvent => {
				return {
					name: mEvent.name,
					time: mEvent.time,
					formattedDate: new Date(mEvent.time).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					}),
					description: mEvent.description,
					link: mEvent.link,
				};
			});
			this.setState({ pastEvents: result });
		});
	}

	render() {
		return (
			<section>
				<h1 style={{ marginTop: '100px' }}>EVENTS</h1>
				<h2>Next Event</h2>
				{this.state.nextEvent}
				<h2>Past Events</h2>
				<ul>
					{this.state.pastEvents.map(mEvent => {
						return (
							<li key={mEvent.time}>
								<h3>
									{mEvent.formattedDate} {mEvent.name}
								</h3>
								{mEvent.description}
								<br />
								<a href={mEvent.link}>read more</a>
							</li>
						);
					})}
				</ul>
			</section>
		);
	}
}

export default Events;
