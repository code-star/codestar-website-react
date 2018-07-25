import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

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
		textDecoration: 'none !important',
	},
};

@translate(['jobs'], { wait: true })
class JobCard extends Component {
	render() {
		const props = this.props;
		const { t, path } = props;
		const { title, short_description } = t('JOBS', { returnObjects: true })[
			path
		];

		return (
			<Card className={props.classes.card}>
				<Link to={`/jobs/${props.path}`} className={props.classes.content}>
					<CardMedia
						className={props.classes.media}
						image={getResponsiveImageUrl(props.image, cardWidth * 2)}
						title={title}
					/>
					<CardContent>
						<Typography gutterBottom variant="headline" component="h2">
							{title}
						</Typography>
						<Typography component="p">{short_description}</Typography>
					</CardContent>
				</Link>
				<CardActions>
					<div style={{ flex: 1 }}>
						<Button
							component={Link}
							to={`/jobs/${props.path}`}
							size="small"
							color="primary"
						>
							{t('JOBS_LEARN_MORE_BUTTON')}
						</Button>
					</div>
					<ShareButtons
						twitter
						linkedin
						facebook
						size="small"
						color="primary"
						title={title}
						text={`${t('JOBS_LOOKING_FOR')} ${title} – ${short_description}`}
						link={`${window.location.href}/jobs/${props.path}`}
					/>
				</CardActions>
			</Card>
		);
	}
}

export default withStyles(styles)(JobCard);
