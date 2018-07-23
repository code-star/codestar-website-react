import React, { Component } from 'react';
import compose from 'recompose/compose';
import { translate } from 'react-i18next';

import { Typography, withWidth, Fade } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Container from '../Container/Container';
import Clients from '../Clients/Clients';
import AnimatedLogo from '../Animations/AnimatedLogo';
import LandscapeBackground from '../Animations/LandscapeBackground';
import DelayedFade from '../Animations/DelayedFade';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const styles = theme => ({
	section: {
		position: 'relative',
		overflow: 'hidden',
	},
	fullVideo: {
		position: 'absolute',
		width: '100vw',
		height: '100vh',
		top: '0',
		left: '0',
		zIndex: -1,
	},
	tagLine: {
		marginTop: 10,
		color: 'white',
		textAlign: 'center',
		fontFamily: 'Conduit',
	},
	whiteText: {
		color: 'white',
		fontFamily: 'Conduit',
		fontSize: '120%',
	},
	paper: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
});

@translate(['intro'], { wait: true })
class Intro extends Component {
	render() {
		const { t, ...props } = this.props;
		return (
			<div>
				<section id="intro" className={props.classes.section}>
					<LandscapeBackground className={props.classes.fullVideo} />
					<Container fullHeight center>
						<div className="row justify-content-center">
							<div className="col-12 col-md-8">
								<div className="row justify-content-center">
									<div className="col-12 col-md-10 mb-5">
										<AnimatedLogo lineDuration={200} fadeDuration={3000} />
										<Fade in timeout={3000}>
											<Typography
												variant="headline"
												className={props.classes.tagLine}
											>
												PASSIONATE&nbsp;PROGRAMMERS. POWERED&nbsp;BY&nbsp;ORDINA
											</Typography>
										</Fade>
									</div>
									<div className="col-12 col-md-10">
										<DelayedFade>
											{(t('INTRO_TEXT') + t('INTRO_TEXT_SUBLINE'))
												.split('.')
												.map(line => line.trim())
												.filter(n => n)
												.map((line, index) => (
													<Typography
														key={`intro-${index}`}
														variant="subheading"
														className={props.classes.whiteText}
													>
														{line}
													</Typography>
												))}
										</DelayedFade>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</section>
				<section id="next-step" className="py-5 bg-white">
					<Container center>
						<div className="row">
							<div className="col-12 col-md-6">
								{/*<Paper className={props.classes.paper} elevation={1}>*/}
								<Typography variant="headline" component="h1" gutterBottom>
									{t('NEXT_STEP_TITLE')}
								</Typography>

								<Typography variant="subheading" gutterBottom>
									{t('NEXT_STEP_CONTENT_1')}
								</Typography>

								<Typography variant="subheading" gutterBottom>
									{t('NEXT_STEP_CONTENT_2')}
								</Typography>
								{/*</Paper>*/}
							</div>
							<div className="col-12 col-md-6">
								<ResponsiveImage
									width="100%"
									path="/images/bucket_waterfall.png"
									alt="What to do?"
								/>
							</div>
						</div>
					</Container>
				</section>
				<section
					id="clients"
					className="py-5"
					style={{ backgroundColor: '#eeeeee' }}
				>
					<Container center>
						<Link to="/cases">
							<Clients />
						</Link>
					</Container>
				</section>
			</div>
		);
	}
}

export default compose(
	withStyles(styles),
	withWidth()
)(Intro);
