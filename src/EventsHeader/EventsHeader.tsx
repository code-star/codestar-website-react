import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from '../i18n';
import sanitizeHtml from 'sanitize-html';
import { Typography, Button, withStyles, Hidden } from '@material-ui/core';
import Container from '../Container/Container';
import Section from '../Section/Section';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import { Link } from 'react-scroll';
import { translate } from '../typed-translate';
import EventsHeaderButton from './EventsHeaderButton';
import { navButtons } from './constants.jsx';
import { purple } from '@material-ui/core/colors';
import css from './EventsHeader.module.css';
import EventsHeaderMessage from './EventsHeaderMessage';

type EventsHeaderProps = any;

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

export class EventsHeader extends Component<EventsHeaderProps> {
	public static propTypes = {
		nextMeetupEvents: PropTypes.array.isRequired,
		noNextMeetupEvent: PropTypes.bool.isRequired,
	};

	constructor(props: any) {
		super(props);
		this.renderDetailsSection = this.renderDetailsSection.bind(this);
	}

	public render() {
		const { nextMeetupEvents, noNextMeetupEvent } = this.props;
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
			headerContent = this.renderHeaderContent(meetupEvent, formattedDate);
			detailsSection = this.renderDetailsSection(
				meetupEvent,
				formattedDate,
				descriptionElem
			);
		} else if (noNextMeetupEvent) {
			headerContent = (
				<EventsHeaderMessage>{this.renderNavButtons()}</EventsHeaderMessage>
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
	}

	private renderNavButtons() {
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
	}

	private renderHeaderContent(mEvent: any, formattedDate: string) {
		const { t, classes } = this.props;
		return (
			<Container fullHeight center className="mt-5 mt-sm-2 mt-md-0">
				<div className="row">
					<div className="col-12">
						<Typography
							align="center"
							variant="display1"
							className={css.nextEventText}
						>
							{t('OUR_NEXT_EVENT')}
						</Typography>
						<Hidden mdUp>
							<Typography
								align="center"
								variant="display2"
								className={css.nextEventTitle}
							>
								{mEvent.name}
							</Typography>
						</Hidden>
						<Hidden smDown>
							<Typography
								align="center"
								variant="display4"
								className={css.nextEventTitle}
							>
								{mEvent.name}
							</Typography>
						</Hidden>
						<Typography
							gutterBottom
							align="center"
							variant="display2"
							className={css.nextEventText}
						>
							{formattedDate}
						</Typography>
						<div style={{ textAlign: 'center' }}>
							<Button
								color="primary"
								variant="raised"
								href={mEvent.link}
								className={`mr-1 ${classes.button}`}
							>
								{t('SIGN_UP')}
							</Button>
							<Link to="event-details" hashSpy smooth>
								<Button variant="contained">{t('MORE_INFO')}</Button>
							</Link>
							<div className="mt-5">{this.renderNavButtons()}</div>
						</div>
					</div>
				</div>
			</Container>
		);
	}

	private renderDetailsSection(
		mEvent: any,
		formattedDate: string,
		descriptionElem: any
	) {
		const { t } = this.props;
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
	}
}

// TODO apply recompose (seems to give type error) and replace typed-translate by normal translate
export default translate(['events'], { wait: true })(
	withStyles(styles)(EventsHeader)
);
