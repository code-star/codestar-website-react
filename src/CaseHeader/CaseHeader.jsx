import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';

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

const CaseHeader = props => (
	<section className={props.classes.section}>
		<ResponsiveImage path={props.image} asBackgroundImage />
		<Container fullHeightMinusNavBar center>
			<div className="row">
				<div className="col-12 col-lg-6">
					<div className="mt-4">
						<Typography
							variant="display3"
							className={`d-inline text-white p-2 bg-dark ${
								css.projectCaseClient
							}`}
						>
							{props.readMore ? (
								<Link
									to={`/cases/${props.path}`}
									className={props.classes.link}
								>
									{props.client}
								</Link>
							) : (
								props.client
							)}
						</Typography>
					</div>
					<div className="my-3">
						<Typography
							variant="headline"
							className={`d-inline text-white p-2 ${css.projectCaseTitle}`}
						>
							{props.readMore ? (
								<Link
									to={`/cases/${props.path}`}
									className={props.classes.link}
								>
									{props.title}
								</Link>
							) : (
								props.title
							)}
						</Typography>
					</div>

					{props.readMore && (
						<div className="mt-2">
							<Button
								variant="raised"
								component={Link}
								to={`/cases/${props.path}`}
								className={props.classes.button}
							>
								Read more
							</Button>
						</div>
					)}
				</div>
			</div>
		</Container>
	</section>
);

export default compose(
	withStyles(styles),
	withWidth()
)(CaseHeader);
