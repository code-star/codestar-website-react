import React from 'react';
import { IMeetupEvent } from '../../modules/EventsContainer/EventsContainer.interfaces';
import EventCard from '../../EventCard/EventCard';

interface INextEventsProps {
	events: IMeetupEvent[];
}

interface INextEventsBlockProps extends INextEventsProps {
	title: string;
}

const NextEvents = ({ events }: INextEventsProps) => (
	<>
		{events.map((event: IMeetupEvent) => (
			// Strip the description and withDescription properties
			<EventCard key={event.time} event={event} />
		))}
	</>
);

export const NextEventsBlock = ({ events, title }: INextEventsBlockProps) =>
	events && events.length > 0 ? (
		<>
			<h2 style={{ color: 'white' }}>{title}</h2>
			<div className="row">
				<div className="d-flex flex-wrap">
					<NextEvents events={events} />
				</div>
			</div>
		</>
	) : null;
