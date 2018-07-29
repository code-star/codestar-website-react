import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import i18n from '../i18n';
import sanitizeHtml from 'sanitize-html';
import { Typography, Button, withStyles, Hidden } from '@material-ui/core';
import Container from '../Container/Container';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import { Link, Element } from 'react-scroll';
import { translate } from 'react-i18next';

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

@translate(['events'], { wait: true })
export class EventsHeader extends Component {
	constructor(props) {
		super(props);
		this.renderDetailsSection = this.renderDetailsSection.bind(this);
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
		const { MeetupEvent: mEvent, t, classes } = this.props;
		// TODO observe changes to i18n.language
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
		return (
			<Fragment>
				<section className={classes.section}>
					<ResponsiveImage
						path="/images/events/2017-09-28%20Andre%20Staltz%20RxJS.jpg"
						asBackgroundImage
						effect="e_art:fes"
						alt="Andre Staltz presenting to a crowd at the Codestar Night meetup of September of 2018"
					/>
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
											{/*TODO image not 100% height*/}
											{/*TODO event notification size must be bigger*/}
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
										{/*<div className="mt-5">
											<Button
												variant="contained"
												className="mr-1"
												href="#contained-buttons"
											>
												Previous Events
											</Button>
											<Button
												variant="contained"
												className="mr-1"
												href="#contained-buttons"
											>
												Blog
											</Button>
											<Button
												variant="contained"
												className="mr-1"
												href="#contained-buttons"
											>
												Photos
											</Button>
											<Button
												variant="contained"
												className="mr-1"
												href="#contained-buttons"
											>
												Videos
											</Button>
										</div>*/}
									</div>
								</div>
							</div>
						</div>
					</Container>
				</section>
				{this.renderDetailsSection(mEvent, formattedDate, descriptionElem)}
			</Fragment>
		);
	}
}

EventsHeader.propTypes = {
	MeetupEvent: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventsHeader);
