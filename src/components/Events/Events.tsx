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
		nextEvent: PropTypes.object.isRequired,
		pastEvents: PropTypes.array.isRequired,
	};

	public render() {
		const { t, nextEvent, pastEvents } = this.props;
		const pastEventsList = pastEvents.map((mEvent: any) => (
			<EventCard key={mEvent.time} MeetupEvent={mEvent} />
		));
		return (
			<Fragment>
				<EventsHeader data={nextEvent} />
				<Section scrollname="previous-events">
					<Container>
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
