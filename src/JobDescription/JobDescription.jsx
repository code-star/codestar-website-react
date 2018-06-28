import React from 'react';
import Container from '../Container/Container';
import { Button } from 'material-ui';
import { Email } from 'material-ui-icons';
import Typography from 'material-ui/Typography';
import { I18n } from 'react-i18next';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	},
});

function hashTagify(string) {
	let words = string.split(' ');
	let capitalized = words.map(
		word => word.charAt(0).toUpperCase() + word.substr(1)
	);
	let hashTag = `#${capitalized.join('')}`;
	return hashTag;
}

const JobDescription = props => (
	<I18n ns={[`${props.translation}`, 'jobs']}>
		{t => (
			<div>
				<section>
					<Container marginTopNavBar>
						<div className="row">
							<div className="col">
								<Typography variant="display3" gutterBottom>
									{t('JOB_TITLE')}
								</Typography>
								<Typography variant="headline" gutterBottom>
									{t('JOB_TAGLINE')}
								</Typography>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<p>
									<b>{t('jobs:JOBS_CLIENT_CASE_LABEL')}</b>:{' '}
									{t('JOB_CLIENT_CASE')}
								</p>
							</div>
						</div>
						{// Missing from react-i18next doc (https://www.i18next.com/translation-function/objects-and-arrays)
						t('JOB_PARAGRAPHS', { returnObjects: true })
							.concat(t('jobs:JOBS_COMMON_PARAGRAPHS', { returnObjects: true }))
							.map((paragraph, i) => (
								<div key={i} className="row">
									<div className="col">
										<h4>{hashTagify(paragraph.title)}</h4>
										<p>{paragraph.content}</p>
										{paragraph.list ? (
											<ul>
												{paragraph.list.map((elem, i) => (
													<li key={i}>{elem}</li>
												))}
											</ul>
										) : null}
									</div>
								</div>
							))}
						<Button
							className={props.classes.button}
							variant="raised"
							color="primary"
							component={Link}
							to="mailto:codestar@ordina.nl"
						>
							<Email className={props.classes.leftIcon} />
							{t('jobs:JOBS_CONTACT_BUTTON')}
						</Button>
						<div className="row">
							<div className="col">
								{t('jobs:JOBS_NOTES', { returnObjects: true }).map(
									(note, i) => (
										<div key={i}>
											<small>
												{'*'.repeat(i + 1)}
												{note}
											</small>
										</div>
									)
								)}
							</div>
						</div>
					</Container>
				</section>
			</div>
		)}
	</I18n>
);

export default withStyles(styles)(JobDescription);
