import React from 'react';
import { Link } from 'react-router-dom';
import { I18n } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core';

import { getResponsiveImageUrl } from '../ResponsiveImage/ResponsiveImage';
import ShareButtons from '../ShareButtons/ShareButtons';

const cardWidth = 250;

const styles = {
	card: {
		width: cardWidth,
		margin: 10,
		display: 'flex',
		flexDirection: 'column',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	content: {
		flex: '1 0 auto',
	},
};

const JobCard = props => (
	<I18n ns={[`${props.translation}`, 'jobs']}>
		{t => (
			<Card className={props.classes.card}>
				<CardMedia
					className={props.classes.media}
					image={getResponsiveImageUrl(props.image, cardWidth * 2)}
					title={t('JOB_TITLE')}
				/>
				<CardContent className={props.classes.content}>
					<Typography gutterBottom variant="headline" component="h2">
						{t('JOB_TITLE')}
					</Typography>
					<Typography component="p">{t('JOB_SHORT_DESC')}</Typography>
				</CardContent>
				<CardActions>
					<div style={{ flex: 1 }}>
						<Button
							component={Link}
							to={`/jobs/${props.path}`}
							size="small"
							color="primary"
						>
							{t('jobs:JOBS_LEARN_MORE_BUTTON')}
						</Button>
					</div>
					<ShareButtons
						twitter
						linkedin
						facebook
						size="small"
						color="primary"
						title={t('JOB_TITLE')}
						text={`Codestar is looking for a ${t('JOB_TITLE')} – ${t(
							'JOB_SHORT_DESC'
						)}`}
						link={`${window.location.href}/jobs/${props.path}`}
					/>
				</CardActions>
			</Card>
		)}
	</I18n>
);

export default withStyles(styles)(JobCard);
