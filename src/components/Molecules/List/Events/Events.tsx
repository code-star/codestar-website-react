import React, { SFC } from 'react';
import Container from '../../../../Container/Container';
import Section from '../../../../Section/Section';
import { translate, TranslationFunction } from 'react-i18next';
import EventsHeader from '../../../../EventsHeader/EventsHeader';
import EventCard from '../../../../EventCard/EventCard';
import compose from 'recompose/compose';
import Heading from '../../../Atoms/Text/Heading';
import TweetList from '../../../Molecules/List/TweetList';
import classNames from 'classnames/bind';
import style from './Events.module.css';

const cx = classNames.bind(style);

/*
 Suggestions for design concepts
 https://www.pixel-stitch.net/
 https://hencework.com/theme/mateve/music_concert/#
 https://colorlib.com/wp/free-event-website-templates/
*/

// TODO improve types by replacing "any"
interface IEventProps {
	t: TranslationFunction;
	nextMeetupEvents: any[];
	noNextMeetupEvent: boolean;
	pastMeetupEvents: any[];
	recentTweets: any[];
}

const Events: SFC<IEventProps> = ({
	t,
	nextMeetupEvents,
	noNextMeetupEvent,
	pastMeetupEvents,
	recentTweets,
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
						<div className={cx('eventsNext')}>
							<div className={cx('eventsNextLeft')}>
								<Heading type="h2" color="white" text={t('OUR_NEXT_EVENTS')} />
								<div className={cx('eventsRow')}>
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

							<div className={cx('eventsNextRight')}>
								<Heading type="h2" color="white" text={t('RECENT_TWEETS')} />
								<TweetList
									tweets={recentTweets}
									className={cx('eventsTweetList')}
								/>
							</div>
						</div>
					) : null}
					<Heading type="h2" color="white" text={t('OUR_PREVIOUS_EVENTS')} />
					<div className={cx('eventsRow')}>
						{pastMeetupEvents.map((mEvent: any) => (
							<EventCard key={mEvent.time} MeetupEvent={mEvent} />
						))}
					</div>
				</Container>
			</Section>
		</>
	);
};

export default compose(translate(['events'], { wait: true }))(Events);
