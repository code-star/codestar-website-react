import React from 'react';
import { I18n } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import Container from '../Container/Container';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	},
});

/*function hashTagify(string) {
	let words = string.split(' ');
	let capitalized = words.map(
		word => word.charAt(0).toUpperCase() + word.substr(1)
	);
	let hashTag = `#${capitalized.join('')}`;
	return hashTag;
}*/

const JobDescription = props => (
	<I18n ns={[`${props.translation}`, 'jobs']}>
		{t => (
			<div>
				<section className="py-3" style={{ backgroundColor: '#eeeeee' }}>
					<Container marginTopNavBar>
						<div className="row justify-content-center">
							<div className="col-12 col-lg-8">
								<Typography variant="display3" gutterBottom>
									{t('JOB_TITLE')}
								</Typography>
								<Typography variant="headline" gutterBottom>
									{t('JOB_TAGLINE')}
								</Typography>
								<p>
									<b>{t('jobs:JOBS_CLIENT_CASE_LABEL')}</b>:{' '}
									{t('JOB_CLIENT_CASE')}
								</p>

								{// Missing from react-i18next doc (https://www.i18next.com/translation-function/objects-and-arrays)
								t('JOB_PARAGRAPHS', { returnObjects: true })
									.concat(
										t('jobs:JOBS_COMMON_PARAGRAPHS', { returnObjects: true })
									)
									.map((paragraph, i) => (
										<div key={i} className="row">
											<div className="col">
												<h4>{paragraph.title}</h4>
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

								<div className="pt-5 pb-3">
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
						</div>
					</Container>
				</section>
			</div>
		)}
	</I18n>
);

export default withStyles(styles)(JobDescription);
