import React from 'react';
import i18n from '../i18n';
import sanitizeHtml from 'sanitize-html';
import { Typography, Button, withStyles } from '@material-ui/core';
import Container from '../Container/Container';
import Section from '../Section/Section';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import { translate, TranslationFunction } from 'react-i18next';
import EventsHeaderButton from './EventsHeaderButton';
import { navButtons } from './constants';
import { purple } from '@material-ui/core/colors';
import css from './EventsHeader.module.css';
import EventsHeaderMessage from './EventsHeaderMessage';
import compose from 'recompose/compose';
import HeaderContent from './HeaderContent';

// TODO improve types by replacing "any"
interface IEventsHeaderPropsInner {
	t: TranslationFunction;
	classes: Record<string, string>;
	nextMeetupEvents: any[];
	noNextMeetupEvent: boolean;
}

interface IEventsHeaderPropsOuter {
	nextMeetupEvents: any[];
	noNextMeetupEvent: boolean;
}

const styles = (theme: any) => ({
	button: {
		color: theme.palette.getContrastText(purple[500]),
		backgroundColor: purple[500],
		'&:hover': {
			color: 'white',
			backgroundColor: purple[700],
		},
	},
});

export const EventsHeader = ({
	t,
	classes,
	nextMeetupEvents,
	noNextMeetupEvent,
}: IEventsHeaderPropsInner) => {
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

	const renderDetailsSection = (
		mEvent: any,
		formattedDate: string,
		descriptionElem: any
	) => {
		return (
			<Section scrollname="event-details" className="bg-white">
				<Container center>
					<div className="row">
						<div className="col-12">
							<Typography align="center" variant="title">
								{mEvent.name}
							</Typography>
							<Typography gutterBottom align="center" variant="subheading">
								{formattedDate}
							</Typography>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-8">{descriptionElem}</div>
						<div className="col-12 col-md-4">
							<img
								src={mEvent.coverUrl}
								alt={`Artistic background with text "${mEvent.name}"`}
								style={{ width: '100%' }}
							/>
							<Button
								color="primary"
								variant="raised"
								href={mEvent.link}
								className="mt-1"
							>
								{t('SIGN_UP')}
							</Button>
						</div>
					</div>
				</Container>
			</Section>
		);
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
		detailsSection = renderDetailsSection(
			meetupEvent,
			formattedDate,
			descriptionElem
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

export default compose<IEventsHeaderPropsInner, IEventsHeaderPropsOuter>(
	translate(['events'], { wait: true }),
	withStyles(styles)
)(EventsHeader);
