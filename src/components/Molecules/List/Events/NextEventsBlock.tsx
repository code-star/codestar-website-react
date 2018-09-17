import React from 'react';
import { IMeetupEvent } from '../../../../modules/EventsContainer/EventsContainer.interfaces';
import EventCard from '../../../../EventCard/EventCard';

import Heading from '../../../Atoms/Text/Heading';
import TweetList from '../../../Molecules/List/TweetList';
import classNames from 'classnames/bind';
import style from './Events.module.css';

const cx = classNames.bind(style);

interface INextEventsProps {
  events: IMeetupEvent[];
}

interface INextEventsBlockProps extends INextEventsProps {
  events: IMeetupEvent[];
  tweets: any[];
  nextEventsTitle: string;
  pastEventsTitle: string;
}

const NextEvents = ({ events }: INextEventsProps) => (
  <>
    {events.map((event: IMeetupEvent) => (
      <EventCard key={event.time} event={event} />
    ))}
  </>
);

export const NextEventsBlock = ({
  events,
  tweets,
  nextEventsTitle,
  pastEventsTitle,
}: INextEventsBlockProps) => {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <div className={cx('eventsNext')}>
      <div className={cx('eventsNextLeft')}>
        <Heading type="h2" color="white" text={nextEventsTitle} />
        <div className={cx('eventsRow')}>
          <NextEvents events={events} />
        </div>
      </div>

      <div className={cx('eventsNextRight')}>
        <Heading type="h2" color="white" text={pastEventsTitle} />
        <TweetList tweets={tweets} className={cx('eventsTweetList')} />
      </div>
    </div>
  );
};
