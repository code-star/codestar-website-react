import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import i18n from '../i18n';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	withStyles,
} from '@material-ui/core';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';

// TODO ! MvD: We can also put this in a .css file to keep the component tidy? CSS modules
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
};

export class EventCard extends Component {
	render() {
		const { MeetupEvent: mEvent, classes } = this.props;
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
			<Card className={mEvent.withDescription ? classes.cardBig : classes.card}>
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
					{/*TODO ! show big/primary "Sign Up" button if event is in the future */}
				</CardActions>
			</Card>
		);
	}
}

EventCard.propTypes = {
	MeetupEvent: PropTypes.object.isRequired,
};

export default compose(
	withStyles(styles),
	translate(['events'], { wait: true })
)(EventCard);
