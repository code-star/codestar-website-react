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
} from '@material-ui/core';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import css from './EventCard.module.css';

export class EventCard extends Component {
	render() {
		const { MeetupEvent: mEvent, t } = this.props;
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
		const signUpButton =
			mEvent.time > Date.now() ? (
				<Button
					size="small"
					color="primary"
					variant="raised"
					href={mEvent.link}
				>
					{t('SIGN_UP')}
				</Button>
			) : null;
		return (
			<Card className={mEvent.withDescription ? css.cardBig : css.card}>
				<CardMedia
					className={css.media}
					image={mEvent.coverUrl}
					title={`${formattedDate} - ${mEvent.name}`}
				/>
				<CardContent className={css.content}>
					<Typography gutterBottom variant="headline" component="h2">
						{formattedDate} - {mEvent.name}
					</Typography>
					{descriptionElem}
				</CardContent>
				<CardActions>
					<Button size="small" color="primary" href={mEvent.link}>
						{t('READ_MORE')}
					</Button>
					{signUpButton}
				</CardActions>
			</Card>
		);
	}
}

EventCard.propTypes = {
	MeetupEvent: PropTypes.object.isRequired,
};

export default compose(translate(['events'], { wait: true }))(EventCard);
