import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '../../Container/Container';
import Section from '../../Section/Section';
import { translate } from '../../typed-translate';
import EventsHeader from '../../EventsHeader/EventsHeader';
import EventCard from '../../EventCard/EventCard';

type EventsProps = any;
type EventsPropTypes = any;

/*
 Suggestions for design concepts
 https://www.pixel-stitch.net/
 https://hencework.com/theme/mateve/music_concert/#
 https://colorlib.com/wp/free-event-website-templates/
*/

// TODO replace propTypes by https://gist.github.com/wittydeveloper/5ffb5f7d5d0c744612404ffdc802cd0a
@translate(['events'], { wait: true })
export default class Events extends Component<EventsProps, EventsPropTypes> {
	public static propTypes = {
		nextMeetupEvents: PropTypes.array.isRequired,
		noNextMeetupEvent: PropTypes.bool.isRequired,
		pastMeetupEvents: PropTypes.array.isRequired,
	};

	public render() {
		const {
			t,
			nextMeetupEvents,
			noNextMeetupEvent,
			pastMeetupEvents,
		} = this.props;
		const nextEventsList = nextMeetupEvents.map(
			({ description, withDescription, ...restOfEvent }: any) => (
				// Strip the description and withDescription properties
				<EventCard key={restOfEvent.time} MeetupEvent={...restOfEvent} />
			)
		);
		const nextEventsBlock =
			nextMeetupEvents && nextMeetupEvents.length > 0 ? (
				<Fragment>
					<h2 style={{ color: 'white' }}>{t('OUR_NEXT_EVENTS')}</h2>
					<div className="row">
						<div className="d-flex justify-content-center flex-wrap">
							{nextEventsList}
						</div>
					</div>
				</Fragment>
			) : null;
		const pastEventsList = pastMeetupEvents.map((mEvent: any) => (
			<EventCard key={mEvent.time} MeetupEvent={mEvent} />
		));
		return (
			<Fragment>
				<EventsHeader
					nextMeetupEvents={nextMeetupEvents}
					noNextMeetupEvent={noNextMeetupEvent}
				/>
				<Section scrollname="previous-events">
					<Container>
						{nextEventsBlock}
						<h2 style={{ color: 'white' }}>{t('OUR_PREVIOUS_EVENTS')}</h2>
						<div className="row">
							<div className="d-flex justify-content-center flex-wrap">
								{pastEventsList}
							</div>
						</div>
					</Container>
				</Section>
			</Fragment>
		);
	}
}
