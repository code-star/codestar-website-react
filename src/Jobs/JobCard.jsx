import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardContent from 'material-ui/Card/CardContent';
import CardMedia from 'material-ui/Card/CardMedia';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { I18n } from 'react-i18next';

const styles = {
	card: {
		width: 250,
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
					image={props.image}
					title={t('JOB_TITLE')}
				/>
				<CardContent className={props.classes.content}>
					<Typography gutterBottom variant="headline" component="h2">
						{t('JOB_TITLE')}
					</Typography>
					<Typography component="p">{t('JOB_SHORT_DESC')}</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary">
						{t('jobs:JOBS_SHARE_BUTTON')}
					</Button>
					<Button
						component={Link}
						to={`/jobs/${props.path}`}
						size="small"
						color="primary"
					>
						{t('jobs:JOBS_LEARN_MORE_BUTTON')}
					</Button>
				</CardActions>
			</Card>
		)}
	</I18n>
);

export default withStyles(styles)(JobCard);
