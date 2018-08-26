import React, { Component } from 'react';
import Container from '../../Container/Container';
import Section from '../../Section/Section';
import { translate } from '../../typed-translate';
import EventsHeader from '../../EventsHeader/EventsHeader';
import EventCard from '../../EventCard/EventCard';
import compose from 'recompose/compose';

interface IEventProps {
	t: any;
	nextMeetupEvents: any[];
	noNextMeetupEvent: boolean;
	pastMeetupEvents: any[];
}

/*
 Suggestions for design concepts
 https://www.pixel-stitch.net/
 https://hencework.com/theme/mateve/music_concert/#
 https://colorlib.com/wp/free-event-website-templates/
*/

// const Events: any = ({
// 											 t,
// 											 nextEvent,
// 											 pastEvents,
// 										 }: {
// 	t: any;
// 	nextEvent: any;
// 	pastEvents: any;
// }) => {

export class Events extends Component<IEventProps> {
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
	}
}

export default compose(translate(['events'], { wait: true }))(Events);

// import React, { Fragment } from 'react';
// import Container from '../../Container/Container';
// import Section from '../../Section/Section';
// import EventsHeader from '../../EventsHeader/EventsHeader';
// import EventCard from '../../EventCard/EventCard';
// import compose from 'recompose/compose';
// import { translate } from 'react-i18next';
//
// /*
//  Suggestions for design concepts
//  https://www.pixel-stitch.net/
//  https://hencework.com/theme/mateve/music_concert/#
//  https://colorlib.com/wp/free-event-website-templates/
// */
//
// // TODO unit test
//
// const Events: any = ({
// 											 t,
// 											 nextEvent,
// 											 pastEvents,
// 										 }: {
// 	t: any;
// 	nextEvent: any;
// 	pastEvents: any;
// }) => {
// 	const pastEventsList = pastEvents.map((mEvent: any) => (
// 		<EventCard key={mEvent.time} MeetupEvent={mEvent} />
// 	));
// 	return (
// 		<Fragment>
// 			<EventsHeader data={nextEvent} />
// 			<Section scrollname="previous-events">
// 				<Container>
// 					<h2 style={{ color: 'white' }}>{t('OUR_PREVIOUS_EVENTS')}</h2>
// 					<div className="row">
// 						<div className="d-flex justify-content-center flex-wrap">
// 							{pastEventsList}
// 						</div>
// 					</div>
// 				</Container>
// 			</Section>
// 		</Fragment>
// 	);
// };
//
// // TODO replace propTypes by https://gist.github.com/wittydeveloper/5ffb5f7d5d0c744612404ffdc802cd0a
// // 	public static propTypes = {
// // 		nextEvent: PropTypes.object.isRequired,
// // 		pastEvents: PropTypes.array.isRequired,
// // 	};
//
// export default compose(translate(['events'], { wait: true }))(Events);
