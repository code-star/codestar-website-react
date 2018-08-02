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

// https://material.io/tools/icons/?style=baseline
import { Edit as EditIcon, Event as EventIcon } from '@material-ui/icons';

const styles = {
	section: {
		position: 'relative',
		overflow: 'hidden',
	},
	nextEventTitle: {
		color: 'white',
		fontWeight: 'bold',
	},
};

const navButtons = [
	{
		icon: <EventIcon />,
		label: 'PREVIOUS_EVENTS',
	},
	{
		icon: <EditIcon />,
		label: 'BLOG',
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
				/>
			);
		});
	}

	renderHeaderContent(mEvent, formattedDate) {
		const { t, classes } = this.props;
		return (
			<Container fullHeight center>
				<div className="row">
					<div className="col-12">
						<div className="mt-4">
							<Typography
								align="center"
								variant="display1"
								style={{ color: 'white' }}
							>
								{t('OUR_NEXT_EVENT')}
							</Typography>
							<Hidden mdUp>
								<Typography
									align="center"
									variant="display2"
									className={classes.nextEventTitle}
								>
									{mEvent.name}
								</Typography>
							</Hidden>
							<Hidden smDown>
								<Typography
									align="center"
									variant="display4"
									className={classes.nextEventTitle}
								>
									{mEvent.name}
									{/*TODO: buttons for the rest of the page, re-use style-color-white */}
								</Typography>
							</Hidden>
							<Typography
								gutterBottom
								align="center"
								variant="display2"
								style={{ color: 'white' }}
							>
								{formattedDate}
							</Typography>
							<div style={{ textAlign: 'center' }}>
								{/*TODO conform button color to CaseHeader button color (purple)*/}
								<Button
									color="primary"
									variant="raised"
									href={mEvent.link}
									className="mr-1"
								>
									{t('SIGN_UP')}
								</Button>
								<Link to="event-details" hashSpy smooth>
									<Button variant="contained">{t('MORE_INFO')}</Button>
								</Link>
								{/*TODO stick buttons to offset from bottom*/}
								{/*TODO instead of buttons links, use blocks like the grid on Cases*/}
								<div className="mt-5">
									{this.renderNavButtons()}
									{/*<Link to="previous-events" hashSpy smooth>
										events button
									</Link>
									<a href="https://medium.com/codestar-blog">
										<Button
											className={classes.linkCursor}
											style={{
												display: 'inline-block',
												padding: '8px',
												margin: '5px',
												backgroundColor: 'white',
												width: '100px',
												height: '100px',
											}}
										>
											<div
												className="row align-items-center mx-0"
												style={{ width: '100%', height: '100%' }}
											>
												<div className="col-12 p-0">
													Blog
												</div>
											</div>
										</Button>
									</a>*/}
									{/*
												Previous Events
												Blog
												Photos
												Videos*/}
								</div>
							</div>
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
								style={{ color: 'white' }}
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
			classes,
		} = this.props;
		let headerContent = null;
		let detailsSection = null;
		// TODO observe changes to i18n.language
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
				<section className={classes.section}>
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
