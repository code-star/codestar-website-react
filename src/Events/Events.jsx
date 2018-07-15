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

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
// page=3 = number of results to return in a page, only need the first 3 results
const GET_UPCOMING_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?photo-host=secure&page=3&sig_id=226887185&status=upcoming&sig=e3efc6db037cf681181d84ae343459a36afbefd4';

const GET_PAST_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?desc=true&photo-host=secure&sig_id=226887185&status=past&sig=c81e4cfc6e9ea5056ccf091b976297e0fbee7b1f';

// TODO unit test

/* TODO get cover image for each event.
This url gets the event details, but is signed for one specific instance: https://api.meetup.com/Code-Star-Night/events/248958146?photo-host=public&sig_id=226887185&fields=featured_photo&sig=c634269c86bda35c0762874a490d219faba6365e
Can use RxJS with JSONP? To combine streams?
 */
//const TEST_IMG_URL = "https://api.meetup.com/Code-Star-Night/events/248958146?photo-host=public&sig_id=226887185&fields=featured_photo&sig=c634269c86bda35c0762874a490d219faba6365e";

const styles = {
	card: {
		maxWidth: 600, // 345,
		marginBottom: '3em',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
};

function convertEventResponseToModel(mEvent) {
	// This works, but should be different for each mEvent
	// jsonp(TEST_IMG_URL).then(response => {
	// 	// TODO use _.get to guard against undefined?
	// 	console.log(response.data.featured_photo.photo_link)
	// });

	return {
		name: mEvent.name,
		time: mEvent.time,
		description: mEvent.description,
		link: mEvent.link,
		coverUrl:
			'https://secure.meetupstatic.com/photos/event/c/1/4/3/600_469909475.jpeg',
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
			const result = response.data.map(convertEventResponseToModel);
			this.setState({ nextEvents: result });
		});

		jsonp(GET_PAST_EVENTS_URL).then(response => {
			const result = response.data.map(convertEventResponseToModel);
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
		const cleanDescription = sanitizeHtml(mEvent.description);
		return (
			<Card key={mEvent.time} className={classes.card}>
				<CardMedia
					className={classes.media}
					image={mEvent.coverUrl}
					title={`${formattedDate} - ${mEvent.name}`}
				/>
				<CardContent>
					<Typography gutterBottom variant="headline" component="h2">
						{formattedDate} - {mEvent.name}
					</Typography>
					<Typography
						component="p"
						dangerouslySetInnerHTML={{ __html: cleanDescription }}
					/>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary" href={mEvent.link}>
						Read More
					</Button>
				</CardActions>
			</Card>
		);
	}

	render() {
		return (
			<section>
				<Container marginTopNavBar>
					<h1 style={{ marginTop: '100px' }}>EVENTS</h1>
					<h2>Next Event</h2>
					{this.state.nextEvents.map(this.renderEventModel)}
				</Container>
				<Container className="mt-3">
					<h2>Past Events</h2>
					{this.state.pastEvents.map(this.renderEventModel)}
				</Container>
			</section>
		);
	}
}

export default withStyles(styles)(Events);
