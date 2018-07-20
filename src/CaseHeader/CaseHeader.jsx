import React, { Component } from 'react';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, withWidth } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import Container from '../Container/Container';
import css from './CaseHeader.module.css';

const styles = theme => ({
	link: {
		color: 'white',
		'&:hover': {
			color: 'white',
		},
	},
	section: {
		position: 'relative',
		overflow: 'hidden',
	},
	button: {
		color: theme.palette.getContrastText(purple[500]),
		backgroundColor: purple[500],
		'&:hover': {
			backgroundColor: purple[700],
		},
	},
});

@translate(['cases'], { wait: true })
class CaseHeader extends Component {
	render() {
		const props = this.props;
		const { t, classes } = props;
		return (
			<section className={classes.section}>
				<ResponsiveImage path={props.image} asBackgroundImage />
				<Container fullHeight center>
					<div className="row">
						<div className="col-12 col-lg-6">
							<div className="mt-4">
								<Typography
									variant="display3"
									className={`d-inline text-white p-2 bg-dark ${
										css.projectCaseClient
									}`}
								>
									{props.client}
								</Typography>
							</div>
							<div className="my-3">
								<Typography
									variant="headline"
									className={`d-inline text-white p-2 ${css.projectCaseTitle}`}
								>
									{props.title}
								</Typography>
							</div>

							{props.readMore && (
								<div className="my-2">
									<Button
										variant="raised"
										onClick={props.callback}
										className={classes.button}
									>
										{t('CASES_READ_MORE_BUTTON')}
									</Button>
								</div>
							)}
						</div>
						<div className="col-12 col-md-6">
							<div className="bg-dark p-3">
								<Typography variant="body1" className="d-inline text-white">
									{props.intro}
								</Typography>
							</div>
						</div>
					</div>
				</Container>
			</section>
		);
	}
}

export default compose(
	withStyles(styles),
	withWidth()
)(CaseHeader);
