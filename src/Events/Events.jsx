import React, { Component, Fragment } from 'react';
import { jsonp } from '../util';
import Container from '../Container/Container';
import _ from 'lodash';
import { translate } from 'react-i18next';
import EventsHeader from '../EventsHeader/EventsHeader';
import EventCard from '../EventCard/EventCard';

/*
 TODO design concepts https://www.pixel-stitch.net/
 https://hencework.com/theme/mateve/music_concert/#
 https://colorlib.com/wp/free-event-website-templates/
*/

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
// page=3 = number of results to return in a page, only need the first 3 results
const GET_UPCOMING_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?photo-host=public&page=3&sig_id=226887185&status=upcoming&fields=featured_photo&sig=d035ab8a8f521cbb4ef14eaff79a55f23c3d25eb';

const GET_PAST_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?desc=true&photo-host=public&sig_id=226887185&status=past&fields=featured_photo&sig=a60e663f0904424f80fda3b00bf31f315889231c';

// TODO unit test

/* TODO Convert JSONP to Fetch+Serverless
This url gets the event details, but is signed for one specific instance: https://api.meetup.com/Code-Star-Night/events/248958146?photo-host=public&sig_id=226887185&fields=featured_photo&sig=c634269c86bda35c0762874a490d219faba6365e
Can use RxJS with JSONP? To combine streams?
 */

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

@translate(['events'], { wait: true })
export default class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nextEvents: [],
			pastEvents: [],
		};
		this.fetchEvents = this.fetchEvents.bind(this);
		// TODO is this called every time when navigating to this page or only once per session (should be the latter)?
		this.fetchEvents();
	}

	// TODO MvD: Ideally we should fetch things in container components. What do you think?
	fetchEvents() {
		/* Meetup API only allows JSONP for client-side, non authenticated, api key signed GET requests.
		   must use JSONP conform https://github.com/meetup/api/issues/211
		   Fetch API does not support JSONP. no-cors mode creates an opaque response without data.
		*/
		jsonp(GET_UPCOMING_EVENTS_URL).then(response => {
			const result = response.data.map(convertEventResponseToModel(true));
			this.setState({ nextEvents: result });
		});

		jsonp(GET_PAST_EVENTS_URL).then(response => {
			const result = response.data.map(convertEventResponseToModel());
			this.setState({ pastEvents: result });
		});
	}

	render() {
		const { t } = this.props;
		const nextEvent =
			this.state.nextEvents.length > 0 ? (
				<EventsHeader MeetupEvent={this.state.nextEvents[0]} />
			) : null;
		const pastEvents = this.state.pastEvents.map(mEvent => (
			<EventCard key={mEvent.time} MeetupEvent={mEvent} />
		));
		const noEvents =
			this.state.nextEvents.length === 0 ? (
				<section className="py-5 bg-white">
					<Container center marginTopNavBar>
						<div className="row">
							<div className="col-12">
								<p>
									There are no upcoming events at this time. For more info, see{' '}
									<a href="https://www.meetup.com/Code-Star-Night">
										our Meetup.com page.
									</a>
								</p>
							</div>
						</div>
					</Container>
				</section>
			) : null;
		return (
			<Fragment>
				{nextEvent}
				{noEvents}
				<section>
					<Container className="mt-3">
						<h2 style={{ color: 'white' }}>{t('OUR_PREVIOUS_EVENTS')}</h2>
						<div className="row">
							<div className="d-flex justify-content-center flex-wrap">
								{pastEvents}
							</div>
						</div>
					</Container>
				</section>
			</Fragment>
		);
	}
}
