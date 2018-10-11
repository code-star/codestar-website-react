import React from 'react';
import { IMeetupEvent } from '../../../../modules/EventsContainer/EventsContainer.interfaces';
import EventCard from '../../../../EventCard/EventCard';
import TweetList from '../../../Molecules/List/TweetList';

interface INextEventsProps {
  events: IMeetupEvent[];
}

interface INextEventsBlockProps extends INextEventsProps {
  events: IMeetupEvent[];
  tweets: any[];
  nextEventsTitle: string;
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
}: INextEventsBlockProps) =>
  events && events.length > 0 ? (
    <>
      <h2 className="text-white">{nextEventsTitle}</h2>
      <div className="row">
        <div className="d-flex flex-wrap">
          <NextEvents events={events} />
        </div>
        {tweets.length > 0 && (
          <div className="pt-3 pl-3 pb-3">
            <TweetList tweets={tweets} />
          </div>
        )}
      </div>
    </>
  ) : null;
