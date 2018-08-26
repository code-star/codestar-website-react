import React from 'react';
import Container from '../../Container/Container';
import Section from '../../Section/Section';
import { translate } from 'react-i18next';
import EventsHeader from '../../EventsHeader/EventsHeader';
import EventCard from '../../EventCard/EventCard';
import compose from 'recompose/compose';

/*
 Suggestions for design concepts
 https://www.pixel-stitch.net/
 https://hencework.com/theme/mateve/music_concert/#
 https://colorlib.com/wp/free-event-website-templates/
*/

// TODO improve types by replacing "any"
const Events: any = ({
	t,
	nextMeetupEvents,
	noNextMeetupEvent,
	pastMeetupEvents,
}: {
	t: any;
	nextMeetupEvents: any[];
	noNextMeetupEvent: boolean;
	pastMeetupEvents: any[];
}) => {
	const nextEventsList = nextMeetupEvents.map(
		({ description, withDescription, ...restOfEvent }: any) => (
			// Strip the description and withDescription properties
			<EventCard key={restOfEvent.time} MeetupEvent={...restOfEvent} />
		)
	);
	const nextEventsBlock =
		nextMeetupEvents && nextMeetupEvents.length > 0 ? (
			<>
				<h2 style={{ color: 'white' }}>{t('OUR_NEXT_EVENTS')}</h2>
				<div className="row">
					<div className="d-flex flex-wrap">{nextEventsList}</div>
				</div>
			</>
		) : null;
	const pastEventsList = pastMeetupEvents.map((mEvent: any) => (
		<EventCard key={mEvent.time} MeetupEvent={mEvent} />
	));
	return (
		<>
			<EventsHeader
				nextMeetupEvents={nextMeetupEvents}
				noNextMeetupEvent={noNextMeetupEvent}
			/>
			<Section scrollname="previous-events">
				<Container>
					{nextEventsBlock}
					<h2 style={{ color: 'white' }}>{t('OUR_PREVIOUS_EVENTS')}</h2>
					<div className="row">
						<div className="d-flex flex-wrap">{pastEventsList}</div>
					</div>
				</Container>
			</Section>
		</>
	);
};

export default compose(translate(['events'], { wait: true }))(Events);
