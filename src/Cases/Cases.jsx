import React from 'react';
import Container from '../Container/Container';

import css from './Cases.module.css';

import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import { Button } from 'material-ui';
import purple from 'material-ui/colors/purple';

import { Link } from 'react-router-dom';

import casesList from './CasesList';

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

const Cases = props => (
	<div>
		<section>
			<Container fullHeightMinusNavBar center>
				<div className="row">
					<div className="col">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
						expedita error dolor omnis saepe repellat officiis deleniti,
						reprehenderit fugiat laboriosam explicabo provident assumenda magnam
						vitae aliquid dolorem harum, doloremque maiores.
					</div>
				</div>
				<div className="row mt-5">
					<div className="col">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
						itaque eos aspernatur tenetur velit aperiam minima asperiores
						consequatur deleniti totam soluta numquam voluptatem accusamus
						eligendi, aut beatae cum, odit excepturi.
					</div>
				</div>
			</Container>
		</section>

		{casesList.map(projectCase => (
			<section
				key={projectCase.client}
				className={props.classes.section}
				style={{
					backgroundImage: projectCase.backgroundImage
						? `url(${projectCase.backgroundImage})`
						: 'none',
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
									{projectCase.client}
								</h1>
							</div>
							<div className="mt-3">
								<span className={`text-white p-2 ${css.projectCaseBrief}`}>
									{projectCase.title}
								</span>
							</div>

							<div className="mt-2">
								<Button variant="raised" className={props.classes.button}>
									<Link to={`/cases/${projectCase.client}`}>Read more</Link>
								</Button>
							</div>
						</div>
					</div>
				</Container>
			</section>
		))}
	</div>
);

export default compose(withStyles(styles), withWidth())(Cases);
