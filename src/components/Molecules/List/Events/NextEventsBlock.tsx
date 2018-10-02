import React from 'react';
import { IMeetupEvent } from '../../../../modules/EventsContainer/EventsContainer.interfaces';
import EventCard from '../../../../EventCard/EventCard';
import TweetList from '../../../Molecules/List/TweetList';
import Heading from '../../../Atoms/Text/Heading';

interface INextEventsProps {
  events: IMeetupEvent[];
}

interface INextEventsBlockProps extends INextEventsProps {
  events: IMeetupEvent[];
  tweets: any[];
  nextEventsTitle: string;
  recentTweetsTitle: string;
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
  recentTweetsTitle,
}: INextEventsBlockProps) =>
  events && events.length > 0 ? (
    <>
      <Heading type="h2" color="white" text={nextEventsTitle} />
      <div className="row">
        <div className="d-flex flex-wrap">
          <NextEvents events={events} />
        </div>
      </div>

      {tweets.length > 0 && (
        <>
          <Heading type="h2" color="white" text={recentTweetsTitle} />
          <div className="row">
            <div className="pt-3 pl-3 pb-3">
              <TweetList tweets={tweets} />
            </div>
          </div>
        </>
      )}
    </>
  ) : null;
