import React, { SFC } from 'react';
import Container from '../../Container/Container';
import Section from '../../Section/Section';
import EventsHeader from '../../EventsHeader/EventsHeader';
import EventCard from '../../EventCard/EventCard';
import { compose } from 'recompose';
import Heading from '../Common/Heading/Heading';
import { translate, TranslationFunction } from 'react-i18next';

/*
 Suggestions for design concepts
 https://www.pixel-stitch.net/
 https://hencework.com/theme/mateve/music_concert/#
 https://colorlib.com/wp/free-event-website-templates/
*/

// TODO improve types by replacing "any"
interface IEventProps {
	nextMeetupEvents: any[];
	noNextMeetupEvent: boolean;
	pastMeetupEvents: any[];
	t: TranslationFunction;
}

const Events: SFC<IEventProps> = ({
	nextMeetupEvents,
	noNextMeetupEvent,
	pastMeetupEvents,
	t,
}) => {
	return (
		<>
			<EventsHeader
				nextMeetupEvents={nextMeetupEvents}
				noNextMeetupEvent={noNextMeetupEvent}
			/>
			<Section scrollname="previous-events">
				<Container>
					{nextMeetupEvents && nextMeetupEvents.length > 0 ? (
						<>
							<Heading type="h2" text={t('OUR_NEXT_EVENTS')} />
							<div className="row">
								<div className="d-flex flex-wrap">
									{nextMeetupEvents.map(
										({ description, withDescription, ...restOfEvent }: any) => (
											<EventCard
												key={restOfEvent.time}
												MeetupEvent={...restOfEvent}
											/>
										)
									)}
								</div>
							</div>
						</>
					) : null}
					<Heading type="h2" text={t('OUR_PREVIOUS_EVENTS')} />
					<div className="row">
						<div className="d-flex flex-wrap">
							{pastMeetupEvents.map((mEvent: any) => (
								<EventCard key={mEvent.time} MeetupEvent={mEvent} />
							))}
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
};

export default compose(translate(['events'], { wait: true }))(Events);
