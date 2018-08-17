import * as React from 'react';
import { translate } from 'react-i18next';

import { Button, Typography } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import Container from '../Container/Container';

type JobDescriptionProps = any;

const styles = (theme: any) => ({
	button: {
		margin: theme.spacing.unit,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	},
});

class JobDescription extends React.Component<JobDescriptionProps> {
	public render() {
		const props = this.props;
		const { path, t } = props;
		const { title, tagline, client_case, paragraphs } = t('JOBS', {
			returnObjects: true,
		})[path];
		const commonParagraphs = t('jobs:JOBS_COMMON_PARAGRAPHS', {
			returnObjects: true,
		});

		return (
			<div>
				<section className="py-3" style={{ backgroundColor: '#eeeeee' }}>
					<Container marginTopNavBar>
						<div className="row justify-content-center">
							<div className="col-12 col-lg-8">
								<Typography variant="display3" gutterBottom>
									{title}
								</Typography>
								<Typography variant="headline" gutterBottom>
									{tagline}
								</Typography>
								<p>
									<b>{t('JOBS_CLIENT_CASE_LABEL')}</b>: {client_case}
								</p>

								{paragraphs
									.concat(commonParagraphs)
									.map((paragraph: any, i: number) => (
										<div key={i} className="row">
											<div className="col">
												<h4>{paragraph.title}</h4>
												<p>{paragraph.content}</p>
												{paragraph.list ? (
													<ul>
														{paragraph.list.map((elem: any, pi: number) => (
															<li key={pi}>{elem}</li>
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
									component="a"
									href="mailto:codestar@ordina.nl"
								>
									<Email className={props.classes.leftIcon} />
									{t('JOBS_CONTACT_BUTTON')}
								</Button>

								<div className="pt-5 pb-3">
									{t('JOBS_NOTES', { returnObjects: true }).map(
										(note: any, i: number) => (
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
		);
	}
}

export default translate(['jobs'], { wait: true })(
	withStyles(styles)(JobDescription)
);