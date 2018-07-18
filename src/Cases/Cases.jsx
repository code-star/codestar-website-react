import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import compose from 'recompose/compose';
import { translate } from 'react-i18next';

import {
	Typography,
	Paper,
	Fade,
	Dialog,
	DialogContent,
	DialogActions,
	Button,
	withMobileDialog,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Container from '../Container/Container';
import CaseHeader from '../CaseHeader/CaseHeader';
import casesList from './CasesList';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

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

@translate(['cases'], { wait: true })
class Cases extends Component {
	orderedCases = [3, 1, 2, 5, 0, 4].map(i => casesList[i]);

	state = this.orderedCases.reduce((accu, clientCase) => {
		accu[clientCase.path] = false;
		return accu;
	}, {});

	render() {
		return (
			<div>
				{this.renderIntro()}
				{this.renderCases()}
			</div>
		);
	}

	renderIntro() {
		const { t, classes } = this.props;
		return (
			<section>
				<Container marginTopNavBar fullHeight center>
					<div className="row justify-content-around mt-3">
						<Fade in timeout={2000}>
							<div className="col-10 col-lg-6 mx-auto">
								<div className="col-8 p-0">
									<img
										src="/images/codestar_logo_dark.svg"
										alt="Codestar powered by Ordina Logo"
										className="mb-3"
									/>
								</div>
								<Typography variant="subheading" className={classes.whiteText}>
									{t('CASES_INTRO_1')}
								</Typography>
								<Typography variant="subheading" className={classes.whiteText}>
									{t('CASES_INTRO_2')}
								</Typography>
							</div>
						</Fade>
						{this.renderBoxes()}
					</div>
				</Container>
			</section>
		);
	}

	renderBoxes() {
		const { classes } = this.props;
		return (
			<div className={`col-12 col-md-10 col-lg-6 my-3 ${classes.noLineHeight}`}>
				{this.orderedCases.map((clientCase, i) => (
					<Link key={i} to={clientCase.client} smooth>
						<Fade in timeout={1000}>
							<Paper
								className={classes.linkCursor}
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
									className="row align-items-center mx-0"
									style={{ width: '100%', height: '100%' }}
								>
									<div className="col-12 p-0">
										<ResponsiveImage
											path={clientCase.logo}
											alt={clientCase.client}
											style={{ width: '100%' }}
										/>
									</div>
								</div>
							</Paper>
						</Fade>
					</Link>
				))}
			</div>
		);
	}

	renderCases() {
		const { t, fullScreen } = this.props;
		return (
			<section>
				{this.orderedCases.map((clientCase, i) => {
					const caseText = t(`CASES.${clientCase.path}`, {
						returnObjects: true,
					});
					const { title, intro, sections } = caseText;
					const changeState = bool => () =>
						this.setState({ [clientCase.path]: bool });

					const img = (
						<img
							alt={clientCase.client}
							src={clientCase.image}
							width="100%"
							className="mb-3"
						/>
					);

					return (
						<Element key={i} name={clientCase.client}>
							<CaseHeader
								{...clientCase}
								readMore={sections !== undefined && sections.length > 0}
								key={clientCase.client}
								title={title}
								intro={intro}
								callback={changeState(true)}
							/>
							<Dialog
								fullScreen={fullScreen}
								open={this.state[clientCase.path]}
								onClose={changeState(false)}
								scroll={fullScreen ? 'paper' : 'body'}
							>
								<DialogContent style={{ overflow: 'visible' }}>
									<h1>{clientCase.client}</h1>
									{title}
								</DialogContent>
								{fullScreen ? null : img}
								<DialogContent>
									{sections.map((section, i) => (
										<div key={i}>
											<h4>{section.title}</h4>
											{section.paragraphs.map((text, j) => (
												<p key={j}>{text}</p>
											))}
										</div>
									))}
									{fullScreen ? img : null}
									{clientCase.stack ? (
										<div>
											<h4>{t('CASES_STACK_TITLE')}</h4>
											<ul>
												{(clientCase.stack || []).map((tech, i) => (
													<li key={i}>{tech}</li>
												))}
											</ul>
										</div>
									) : null}
								</DialogContent>
								<DialogActions>
									<Button onClick={changeState(false)} color="primary">
										{t('CASES_CLOSE_BUTTON')}
									</Button>
								</DialogActions>
							</Dialog>
						</Element>
					);
				})}
			</section>
		);
	}
}

export default compose(
	withStyles(styles),
	withMobileDialog()
)(Cases);
