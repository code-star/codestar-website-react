import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '../../Container/Container';
import Section from '../../Section/Section';
import { translate } from 'react-i18next';
import EventsHeader from '../../EventsHeader/EventsHeader';
import EventCard from '../../EventCard/EventCard';
import { Element } from 'react-scroll';

/*
 Suggestions for design concepts
 https://www.pixel-stitch.net/
 https://hencework.com/theme/mateve/music_concert/#
 https://colorlib.com/wp/free-event-website-templates/
*/

// TODO unit test

@translate(['events'], { wait: true })
export default class Events extends Component {
	render() {
		const { t, nextEvent, pastEvents } = this.props;
		const pastEventsList = pastEvents.map(mEvent => (
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

Events.propTypes = {
	nextEvent: PropTypes.object.isRequired,
	pastEvents: PropTypes.array.isRequired,
};
