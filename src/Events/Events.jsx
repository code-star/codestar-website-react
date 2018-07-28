import React, { Component } from 'react';
import { jsonp } from '../util';
import i18n from '../i18n';
import sanitizeHtml from 'sanitize-html';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	withStyles,
} from '@material-ui/core';
import Container from '../Container/Container';
import _ from 'lodash';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import { Link, Element } from 'react-scroll';

/*
 TODO design ideas https://www.pixel-stitch.net/
 https://hencework.com/theme/mateve/music_concert/#
 https://colorlib.com/wp/free-event-website-templates/
*/

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
// page=3 = number of results to return in a page, only need the first 3 results
const GET_UPCOMING_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?photo-host=public&page=3&sig_id=226887185&status=upcoming&fields=featured_photo&sig=d035ab8a8f521cbb4ef14eaff79a55f23c3d25eb';

const GET_PAST_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?desc=true&photo-host=public&sig_id=226887185&status=past&fields=featured_photo&sig=a60e663f0904424f80fda3b00bf31f315889231c';

// TODO unit test

/* TODO Convert JSONP to Fetch+Serverless
This url gets the event details, but is signed for one specific instance: https://api.meetup.com/Code-Star-Night/events/248958146?photo-host=public&sig_id=226887185&fields=featured_photo&sig=c634269c86bda35c0762874a490d219faba6365e
Can use RxJS with JSONP? To combine streams?
 */

const styles = {
	card: {
		maxWidth: 300, // 345,
		margin: '1em',
		display: 'flex',
		flexDirection: 'column',
	},
	cardBig: {
		maxWidth: 600, // 345,
		marginBottom: '3em',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	content: {
		flex: '1 0 auto',
	},
	section: {
		position: 'relative',
		overflow: 'hidden',
	},
};

function convertEventResponseToModel(withDescription = false) {
	return function(mEvent) {
		const fallbackImage =
			'https://res.cloudinary.com/codestar/image/upload/v1532409289/codestar.nl/meetup/codestar-night-logo.jpg';
		const result = {
			name: mEvent.name,
			time: mEvent.time,
			link: mEvent.link,
			coverUrl: _.get(mEvent, 'featured_photo.photo_link', fallbackImage),
			withDescription,
		};
		if (withDescription) {
			Object.assign(result, {
				description: mEvent.description,
			});
		}
		return result;
	};
}

export class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nextEvents: [],
			pastEvents: [],
		};
		this.renderEventModel = this.renderEventModel.bind(this);
		this.renderHeader = this.renderHeader.bind(this);
		this.fetchEvents = this.fetchEvents.bind(this);
		// TODO is this called every time when navigating to this page or only once per session (should be the latter)?
		this.fetchEvents();
	}

	fetchEvents() {
		/* Meetup API only allows JSONP for client-side, non authenticated, api key signed GET requests.
		   must use JSONP conform https://github.com/meetup/api/issues/211
		   Fetch API does not support JSONP. no-cors mode creates an opaque response without data.
		*/
		jsonp(GET_UPCOMING_EVENTS_URL).then(response => {
			const result = response.data.map(convertEventResponseToModel(true));
			this.setState({ nextEvents: result });
		});

		jsonp(GET_PAST_EVENTS_URL).then(response => {
			const result = response.data.map(convertEventResponseToModel());
			this.setState({ pastEvents: result });
		});
	}

	renderEventModel(mEvent) {
		const { classes } = this.props;
		// TODO observe changes to i18n.language
		const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
		const formattedDate = new Date(mEvent.time).toLocaleDateString(locale, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		// Do stricter cleaning?
		// const cleanDescription = sanitizeHtml(mEvent.description, {
		// 	allowedTags: ['b', 'i', 'em', 'strong', 'a'],
		// 	allowedAttributes: {
		// 		a: ['href', 'target']
		// 	}
		// });
		let descriptionElem = null;
		if (mEvent.withDescription) {
			const cleanDescription = sanitizeHtml(mEvent.description);
			descriptionElem = (
				<Typography
					component="p"
					dangerouslySetInnerHTML={{ __html: cleanDescription }}
				/>
			);
		}
		return (
			<Card
				key={mEvent.time}
				className={mEvent.withDescription ? classes.cardBig : classes.card}
			>
				<CardMedia
					className={classes.media}
					image={mEvent.coverUrl}
					title={`${formattedDate} - ${mEvent.name}`}
				/>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="headline" component="h2">
						{formattedDate} - {mEvent.name}
					</Typography>
					{descriptionElem}
				</CardContent>
				<CardActions>
					<Button size="small" color="primary" href={mEvent.link}>
						Read More
					</Button>
					{/*TODO show big/primary "Sign Up" button if event is in the future */}
				</CardActions>
			</Card>
		);
	}

	renderHeader(mEvent) {
		// TODO observe changes to i18n.language
		const { classes } = this.props;
		const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
		const formattedDate = new Date(mEvent.time).toLocaleDateString(locale, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		let descriptionElem = null;
		if (mEvent.withDescription) {
			const cleanDescription = sanitizeHtml(mEvent.description);
			descriptionElem = (
				<Typography
					component="p"
					dangerouslySetInnerHTML={{ __html: cleanDescription }}
				/>
			);
		}
		return (
			<div key={mEvent.name}>
				<section className={classes.section}>
					{/*path="https://res.cloudinary.com/codestar/image/upload/w_400,e_art:fes/v1532541215/codestar.nl/images/events/2017-09-28%20Andre%20Staltz%20RxJS.jpg"*/}
					{/*TODO alt attribute*/}
					<ResponsiveImage
						path="/images/events/2017-09-28%20Andre%20Staltz%20RxJS.jpg"
						asBackgroundImage
						effect="e_art:fes"
						alt="TODO"
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
										Our next event:
									</Typography>
									<Typography
										align="center"
										variant="display4"
										style={{ color: 'white', fontWeight: 'bold' }}
									>
										{mEvent.name}
										{/*TODO: image should use filter, title, sign up button, buttons for the rest of the page, re-use style-color-white */}
										{/*TODO image not 100% height*/}
										{/*TODO event notification size must be bigger*/}
									</Typography>
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
											@@Sign_Up!
										</Button>
										<Button variant="contained" href={mEvent.link}>
											@@More_info
										</Button>
										{/*TODO stick buttons to offset from bottom*/}
										{/*TODO instead of buttons links, use blocks like the grid on Cases*/}
										{/*<div className="mt-5">
											<Link to="event-details" hashSpy smooth>
												<Button variant="contained" className="mr-1">
													More about this event
												</Button>
											</Link>
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
								{/*<div className="my-3">
								<Typography
									variant="headline"
									className={`d-inline text-white p-2 ${css.projectCaseTitle}`}
								>
									{props.title}
								</Typography>
							</div>

							{props.readMore && (
								<div className="my-2">
									<Button
										variant="raised"
										onClick={props.callback}
										className={classes.button}
									>
										{t('CASES_READ_MORE_BUTTON')}
									</Button>
								</div>
							)}
						</div>
						<div className="col-12 col-md-6">
							<div className="bg-dark p-3">
								<Typography variant="body1" className="d-inline text-white">
									{props.intro}
								</Typography>
							</div>
						</div>*/}
							</div>
						</div>
					</Container>
				</section>
				{/*<Element name="event-details" className="mt-5" marginTopNavBar>
					<Container>
						 TODO fix top margin, show background, show image, show title, show sign up button
						{descriptionElem}
					</Container>
				</Element>*/}
			</div>
		);
	}

	render() {
		const noEvents =
			this.state.nextEvents.length === 0 ? (
				<section className="py-5 bg-white">
					<Container center marginTopNavBar>
						<div className="row">
							<div className="col-12">
								<p>
									There are no upcoming events at this time. For more info, see{' '}
									<a href="https://www.meetup.com/Code-Star-Night">
										our Meetup.com page.
									</a>
								</p>
							</div>
						</div>
					</Container>
				</section>
			) : null;
		return (
			<div>
				{/*TODO replace div by Fragment*/}
				{this.state.nextEvents.map(this.renderHeader)}
				{noEvents}
				<section>
					{/*<Container marginTopNavBar>
						,h_53,c_scale
						<img src="https://res.cloudinary.com/codestar/image/upload/w_400,e_art:fes/v1532541215/codestar.nl/images/events/2017-09-28%20Andre%20Staltz%20RxJS.jpg" alt=""/>
						<h2 style={{ color: 'white' }}>Our Next Event</h2>
						{this.state.nextEvents.map(this.renderEventModel)}
					</Container>*/}
					{/*<Container className="mt-3">
						<h2 style={{ color: 'white' }}>Our Previous Events</h2>
						<div className="row">
							<div className="d-flex justify-content-center flex-wrap">
								{this.state.pastEvents.map(this.renderEventModel)}
							</div>
						</div>
					</Container>*/}
				</section>
			</div>
		);
	}
}

export default withStyles(styles)(Events);
