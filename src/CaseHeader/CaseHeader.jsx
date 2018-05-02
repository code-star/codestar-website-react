import React from 'react';
import Container from '../Container/Container';

import css from './CaseHeader.module.css';

import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import { Button } from 'material-ui';
import purple from 'material-ui/colors/purple';

import { Link } from 'react-router-dom';

const styles = theme => ({
	section: {
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
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
	<section
		className={props.classes.section}
		style={{
			backgroundImage: props.image ? `url(${props.image})` : 'none',
		}}
	>
		<Container fullHeightMinusNavBar center>
			<div className="row">
				<div className="col-12 col-lg-6">
					<div className="mt-4">
						<h1
							className={`display-4 d-inline text-white p-2 bg-dark ${
								css.projectCaseClient
							}`}
						>
							{props.client}
						</h1>
					</div>
					<div className="mt-3">
						<span className={`text-white p-2 ${css.projectCaseTitle}`}>
							{props.title}
						</span>
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

export default compose(withStyles(styles), withWidth())(CaseHeader);