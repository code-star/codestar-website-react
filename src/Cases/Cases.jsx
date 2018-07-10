import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { Link, Element } from 'react-scroll';
import Grow from 'material-ui/transitions/Grow';

import Container from '../Container/Container';
import CaseHeader from '../CaseHeader/CaseHeader';
import casesList from './CasesList';

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
	noLineHeight: {
		lineHeight: 0,
	},
};

const Cases = props => (
	<div>
		<section>
			<Container fullHeight center>
				<div className="row justify-content-around">
					<div className="col-10 col-lg-6 mx-auto">
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
					<div className={`col-10 col-lg-6 mt-3 ${props.classes.noLineHeight}`}>
						{/*<li
									className={[
										props.classes.whiteText,
										props.classes.linkCursor,
									].join(' ')}
								>
									<Link to={clientCase.client} smooth>
										{clientCase.client}
									</Link>
								</li>*/}
						{casesList.map(clientCase => (
							<Link to={clientCase.client} smooth>
								<Grow in>
									<Paper
										className={props.classes.linkCursor}
										style={{
											display: 'inline-block',
											padding: '.5em',
											margin: '5px',
											backgroundColor: clientCase.color
												? clientCase.color
												: 'transparent',
											width: '150px',
											height: '150px',
										}}
									>
										<div
											style={{
												backgroundImage: `url(${clientCase.logo})`,
												backgroundSize: 'contain',
												backgroundPosition: 'center',
												backgroundRepeat: 'no-repeat',
												width: '100%',
												height: '100%',
											}}
										/>
									</Paper>
								</Grow>
							</Link>
						))}
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
