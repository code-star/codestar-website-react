import React from 'react';
import { IMeetupEvent } from '../../../../containers/EventsContainer/EventsContainer.interfaces';
import EventCard from '../../../../EventCard/EventCard';

interface INextEventsProps {
  events: IMeetupEvent[];
}

interface INextEventsBlockProps extends INextEventsProps {
  events: IMeetupEvent[];
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
  nextEventsTitle,
}: INextEventsBlockProps) =>
  events && events.length > 0 ? (
    <>
      <h2 className="text-white">{nextEventsTitle}</h2>
      <div className="row">
        <div className="d-flex flex-wrap">
          <NextEvents events={events} />
        </div>
      </div>
    </>
  ) : null;
