import React, { Component, Fragment } from 'react';
import Container from '../Container/Container';
import { translate } from 'react-i18next';
import EventsHeader from '../EventsHeader/EventsHeader';
import EventCard from '../EventCard/EventCard';
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
				<Element name="previous-events">
					<section>
						<Container marginTopNavBar>
							<h2 style={{ color: 'white' }}>{t('OUR_PREVIOUS_EVENTS')}</h2>
							<div className="row">
								<div className="d-flex justify-content-center flex-wrap">
									{pastEventsList}
								</div>
							</div>
						</Container>
					</section>
				</Element>
			</Fragment>
		);
	}
}
