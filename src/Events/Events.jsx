import React, { Component, Fragment } from 'react';
import { jsonp } from '../util';
import Container from '../Container/Container';
import _ from 'lodash';
import { translate } from 'react-i18next';
import EventsHeader from '../EventsHeader/EventsHeader';
import EventCard from '../EventCard/EventCard';
import { Element } from 'react-scroll';

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

	// TODO MvD: Ideally we should fetch things in container components. What do you think?
	fetchEvents() {
		/* Meetup API only allows JSONP for client-side, non authenticated, api key signed GET requests.
		   must use JSONP conform https://github.com/meetup/api/issues/211
		   Fetch API does not support JSONP. no-cors mode creates an opaque response without data.
		*/
		jsonp(GET_UPCOMING_EVENTS_URL).then(response => {
			const result = _.head(
				response.data.map(convertEventResponseToModel(true))
			);
			const nextEvent = {
				loading: false,
				mEvent: result ? result : null,
				noEvent: !result,
			};
			this.setState({ nextEvent });
		});

		jsonp(GET_PAST_EVENTS_URL).then(response => {
			const result = response.data.map(convertEventResponseToModel());
			this.setState({ pastEvents: result });
		});
	}

	render() {
		const { t } = this.props;
		const pastEvents = this.state.pastEvents.map(mEvent => (
			<EventCard key={mEvent.time} MeetupEvent={mEvent} />
		));
		return (
			<Fragment>
				<EventsHeader data={this.state.nextEvent} />
				<Element name="previous-events">
					<section>
						<Container marginTopNavBar>
							<h2 style={{ color: 'white' }}>{t('OUR_PREVIOUS_EVENTS')}</h2>
							<div className="row">
								<div className="d-flex justify-content-center flex-wrap">
									{pastEvents}
								</div>
							</div>
						</Container>
					</section>
				</Element>
			</Fragment>
		);
	}
}
