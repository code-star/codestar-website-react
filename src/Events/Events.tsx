import * as React from 'react';
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
	Hidden,
} from '@material-ui/core';
import Container from '../Container/Container';
import _ from 'lodash';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import { translate } from 'react-i18next';

type EventsProps = any;
type EventsState = any;

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
// page=3 = number of results to return in a page, only need the first 3 results
const GET_UPCOMING_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?photo-host=public&page=3&sig_id=226887185&status=upcoming&fields=featured_photo&sig=d035ab8a8f521cbb4ef14eaff79a55f23c3d25eb';

const GET_PAST_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?desc=true&photo-host=public&sig_id=226887185&status=past&fields=featured_photo&sig=a60e663f0904424f80fda3b00bf31f315889231c';

const styles: any = {
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
	nextEventTitle: {
		color: 'white',
		fontWeight: 'bold',
	},
};

function convertEventResponseToModel(withDescription: boolean = false) {
	return (mEvent: any) => {
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

export class Events extends React.Component<EventsProps, EventsState> {
	constructor(props: EventsProps) {
		super(props);
		this.state = {
			nextEvents: [],
			pastEvents: [],
		};
		this.renderEventModel = this.renderEventModel.bind(this);
		this.renderHeader = this.renderHeader.bind(this);
		this.fetchEvents = this.fetchEvents.bind(this);
		this.fetchEvents();
	}

	public fetchEvents() {
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

	public renderEventModel(mEvent: any) {
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
				</CardActions>
			</Card>
		);
	}

	public renderHeader(mEvent: any) {
		const { t, classes } = this.props;
		const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
		const formattedDate = new Date(mEvent.time).toLocaleDateString(locale, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		return (
			<div key={mEvent.name}>
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
										<Button
											color="primary"
											variant="raised"
											href={mEvent.link}
											className="mr-1"
										>
											{t('SIGN_UP')}
										</Button>
										<Button variant="contained" href={mEvent.link}>
											{t('MORE_INFO')}
										</Button>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</section>
			</div>
		);
	}

	public render() {
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
				{this.state.nextEvents.map(this.renderHeader)}
				{noEvents}
			</div>
		);
	}
}

export default translate(['events'], { wait: true })(
	withStyles(styles)(Events)
);
