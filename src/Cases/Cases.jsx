import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { Link, Element } from 'react-scroll';

import Container from '../Container/Container';
import CaseHeader from '../CaseHeader/CaseHeader';
import casesList from './CasesList';
import DelayedFade from '../Animations/DelayedFade';

const styles = {
	whiteText: {
		color: 'white',
		textAlign: 'left',
		fontFamily: 'Conduit',
		fontSize: '120%',
	},
	linkCursor: {
		cursor: 'pointer',
	},
};

const Cases = props => (
	<div>
		<section>
			<Container fullHeight center>
				<div className="row justify-content-around">
					<div className="col-10 col-md-6 mx-auto">
						<div className="col-12 col-md-8 p-0">
							<img
								src="/images/codestar_logo_dark.svg"
								alt="Codestar powered by Ordina Logo"
								className="mb-3"
							/>
						</div>
						<Typography
							variant="subheading"
							className={props.classes.whiteText}
						>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
							expedita error dolor omnis saepe repellat officiis deleniti,
							reprehenderit fugiat laboriosam explicabo provident assumenda
							magnam vitae aliquid dolorem harum, doloremque maiores.
						</Typography>
						<Typography
							variant="subheading"
							className={props.classes.whiteText}
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
							itaque eos aspernatur tenetur velit aperiam minima asperiores
							consequatur deleniti totam soluta numquam voluptatem accusamus
							eligendi, aut beatae cum, odit excepturi.
						</Typography>
					</div>
					<div className="col-10 col-md-4 mt-3">
						<DelayedFade panLeft>
							{casesList.map(clientCase => (
								<li
									className={[
										props.classes.whiteText,
										props.classes.linkCursor,
									].join(' ')}
								>
									<Link to={clientCase.client} smooth>
										{clientCase.client}
									</Link>
								</li>
							))}
						</DelayedFade>
					</div>
				</div>
			</Container>
		</section>

		{casesList.map(clientCase => (
			<Element name={clientCase.client}>
				<CaseHeader {...clientCase} readMore={true} key={clientCase.client} />
			</Element>
		))}
	</div>
);

export default withStyles(styles)(Cases);
