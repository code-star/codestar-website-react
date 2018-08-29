import React from 'react';
import i18n from '../i18n';
import sanitizeHtml from 'sanitize-html';
import { Typography } from '@material-ui/core';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import EventsHeaderButton from './EventsHeaderButton';
import { navButtons } from './constants';
import css from './EventsHeader.module.css';
import EventsHeaderMessage from './EventsHeaderMessage';
import HeaderContent from './HeaderContent';
import DetailsSection from './DetailsSection';

// TODO improve types by replacing "any"
interface IEventsHeaderProps {
	nextMeetupEvents: any[];
	noNextMeetupEvent: boolean;
}

const EventsHeader = ({
	nextMeetupEvents,
	noNextMeetupEvent,
}: IEventsHeaderProps) => {
	const renderNavButtons = () => {
		return navButtons.map(config => {
			return (
				<EventsHeaderButton
					key={config.label}
					label={config.label}
					icon={config.icon}
					to={config.to}
					href={config.href}
				/>
			);
		});
	};

	let headerContent = null;
	let detailsSection = null;
	const meetupEvent =
		nextMeetupEvents && nextMeetupEvents.length > 0
			? nextMeetupEvents[0]
			: null;
	if (meetupEvent) {
		const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
		const formattedDate = new Date(meetupEvent.time).toLocaleDateString(
			locale,
			{
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			}
		);
		const cleanDescription = sanitizeHtml(meetupEvent.description);
		const descriptionElem = (
			<Typography
				component="p"
				dangerouslySetInnerHTML={{ __html: cleanDescription }}
			/>
		);
		headerContent = (
			<HeaderContent mEvent={meetupEvent} formattedDate={formattedDate}>
				{renderNavButtons()}
			</HeaderContent>
		);
		detailsSection = (
			<DetailsSection
				mEvent={meetupEvent}
				formattedDate={formattedDate}
				descriptionElem={descriptionElem}
			/>
		);
	} else if (noNextMeetupEvent) {
		headerContent = (
			<EventsHeaderMessage>{renderNavButtons()}</EventsHeaderMessage>
		);
	}

	return (
		<>
			<section className={css.section}>
				<ResponsiveImage
					path="/images/events/2017-09-28%20Andre%20Staltz%20RxJS.jpg"
					asBackgroundImage
					effect="e_art:fes"
					alt="Andre Staltz presenting to a crowd at the Codestar Night meetup of September of 2018"
				/>
				{headerContent}
			</section>
			{detailsSection}
		</>
	);
};

export default EventsHeader;
