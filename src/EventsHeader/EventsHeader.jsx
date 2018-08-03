import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import i18n from '../i18n';
import sanitizeHtml from 'sanitize-html';
import { Typography, Button, withStyles, Hidden } from '@material-ui/core';
import Container from '../Container/Container';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import { Link, Element } from 'react-scroll';
import { translate } from 'react-i18next';
import EventsHeaderButton from './EventsHeaderButton';
import css from './EventsHeader.module.css';

// https://material.io/tools/icons/?style=baseline
import {
	Edit as EditIcon,
	Event as EventIcon,
	Movie as MovieIcon,
	Portrait as PortraitIcon,
} from '@material-ui/icons';
import { purple } from '@material-ui/core/colors';

const styles = theme => ({
	button: {
		color: theme.palette.getContrastText(purple[500]),
		backgroundColor: purple[500],
		'&:hover': {
			color: 'white',
			backgroundColor: purple[700],
		},
	},
});

const navButtons = [
	{
		icon: <EventIcon />,
		label: 'events',
		to: 'previous-events',
	},
	{
		icon: <EditIcon />,
		label: 'blog',
		href: 'https://medium.com/codestar-blog',
	},
	{
		icon: <PortraitIcon />,
		label: 'pics',
		to: 'previous-events',
	},
	{
		icon: <MovieIcon />,
		label: 'video',
		href: 'https://www.youtube.com/channel/UCqwHhJNEUe7D-HGsX4zvKzQ',
	},
];

@translate(['events'], { wait: true })
export class EventsHeader extends Component {
	constructor(props) {
		super(props);
		this.renderDetailsSection = this.renderDetailsSection.bind(this);
	}

	renderNavButtons() {
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

	renderHeaderContent(mEvent, formattedDate) {
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

	renderNoEvents() {
		const { t } = this.props;
		return (
			<Container center className="mt-5 mb-3">
				<div className="row">
					<div className="col-12">
						<div className="mt-4">
							<Typography
								gutterBottom
								align="center"
								variant="display2"
								className={css.nextEventText}
							>
								{t('INFO_NO_NEXT_EVENTS')}
							</Typography>
							<div style={{ textAlign: 'center' }}>
								<Button
									color="primary"
									variant="raised"
									href="https://www.meetup.com/Code-Star-Night"
									className="mr-1"
								>
									{t('CODESTAR_ON_MEETUP_COM')}
								</Button>
								<div className="mt-5">{this.renderNavButtons()}</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		);
	}

	renderDetailsSection(mEvent, formattedDate, descriptionElem) {
		const { t } = this.props;
		return (
			<Element name="event-details">
				<section className="py-5 bg-white">
					<Container center marginTopNavBar>
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
				</section>
			</Element>
		);
	}

	render() {
		const {
			data: { mEvent, noEvent },
		} = this.props;
		let headerContent = null;
		let detailsSection = null;
		if (mEvent) {
			const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
			const formattedDate = new Date(mEvent.time).toLocaleDateString(locale, {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			});
			const cleanDescription = sanitizeHtml(mEvent.description);
			const descriptionElem = (
				<Typography
					component="p"
					dangerouslySetInnerHTML={{ __html: cleanDescription }}
				/>
			);
			headerContent = this.renderHeaderContent(mEvent, formattedDate);
			detailsSection = this.renderDetailsSection(
				mEvent,
				formattedDate,
				descriptionElem
			);
		} else if (noEvent) {
			headerContent = this.renderNoEvents();
		}
		return (
			<Fragment>
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
			</Fragment>
		);
	}
}

EventsHeader.propTypes = {
	data: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventsHeader);
