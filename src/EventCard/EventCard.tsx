import React, { Component } from 'react';
import i18n from '../i18n';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@material-ui/core';
import { translate, TranslationFunction } from 'react-i18next';
import compose from 'recompose/compose';
import css from './EventCard.module.css';
import { IMeetupEvent } from '../modules/EventsContainer/EventsContainer.interfaces';

interface IEventCardOuterProps {
	event: IMeetupEvent;
}

interface IEventCardInnerProps {
	t: TranslationFunction;
}

export class EventCard extends Component<
	IEventCardInnerProps & IEventCardOuterProps
> {
	public render() {
		const { event, t } = this.props;
		const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
		const formattedDate = new Date(event.time).toLocaleDateString(locale, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		const signUpButton =
			event.time > Date.now() ? (
				<Button size="small" color="primary" variant="raised" href={event.link}>
					{t('SIGN_UP')}
				</Button>
			) : null;
		return (
			<Card className={css.card}>
				<CardMedia
					className={css.media}
					image={event.coverUrl}
					title={`${formattedDate} - ${event.name}`}
				/>
				<CardContent className={css.content}>
					<Typography gutterBottom variant="headline" component="h2">
						{formattedDate} - {event.name}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary" href={event.link}>
						{t('READ_MORE')}
					</Button>
					{signUpButton}
				</CardActions>
			</Card>
		);
	}
}

export default compose<IEventCardInnerProps, IEventCardOuterProps>(
	translate(['events'], { wait: true })
)(EventCard);
