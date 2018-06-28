import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Clients from '../Clients/Clients';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';

import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import { translate } from 'react-i18next';

const styles = () => ({
	section: {
		position: 'relative',
		overflow: 'hidden',
	},
	fullVideo: {
		position: 'absolute',
		minWidth: '100vw',
		minHeight: '100vh',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: -1,
	},
	card: {
		backgroundColor: 'black',
	},
	introText: {
		color: 'white',
	},
	button: {
		color: 'white',
		'&:hover': {
			backgroundColor: 'white',
			color: 'black',
		},
	},
});

@translate(['intro'], { wait: true })
class Intro extends Component {
	render() {
		const props = this.props;
		const { t } = this.props;
		return (
			<div>
				<section id="intro" className={props.classes.section}>
					<Hidden smUp>
						<ResponsiveImage
							path="/images/sky_2719001_frame.jpg"
							asBackgroundImage
						/>
					</Hidden>
					<Hidden only="xs">
						<video autoPlay muted loop className={props.classes.fullVideo}>
							<source
								src={`${process.env.PUBLIC_URL}/sky_2719001.mp4`}
								type="video/mp4"
							/>
						</video>
					</Hidden>
					<Container fullHeight center>
						<div className="row justify-content-center">
							<div className="col-12 col-md-6">
								<Card className={props.classes.card}>
									<CardContent>
										<div className="row justify-content-center">
											<div className="col-10 col-md-6 mb-3 mt-2">
												<img
													src={`${
														process.env.PUBLIC_URL
													}/images/codestar_logo_dark_(tagline).svg`}
													alt="Codestar powered by Ordina Logo"
												/>
											</div>
										</div>
										<Typography
											variant="subheading"
											gutterBottom
											className={props.classes.introText}
										>
											{t('INTRO_TEXT')}
										</Typography>
										<Typography
											variant="subheading"
											gutterBottom
											className={props.classes.introText}
										>
											{t('INTRO_TEXT_SUBLINE')}
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											component={Link}
											to="/cases"
											className={props.classes.button}
										>
											Go to cases
										</Button>
									</CardActions>
								</Card>
							</div>
						</div>
					</Container>
				</section>
				<section id="next-step" className="py-3 bg-white">
					<Container>
						<div className="row">
							<div className="col-12 col-md-6">
								<Typography variant="headline" gutterBottom>
									{t('NEXT_STEP_TITLE')}
								</Typography>

								<Typography variant="subheading" gutterBottom>
									{t('NEXT_STEP_CONTENT_1')}
								</Typography>

								<Typography variant="subheading" gutterBottom>
									{t('NEXT_STEP_CONTENT_2')}
								</Typography>
							</div>
							{/*<div className="col-12 col-md-6">
								<Typography variant="subheading" gutterBottom>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
									neque, vel adipisci exercitationem numquam unde commodi esse ipsum
									necessitatibus, consectetur fuga nihil ducimus dolor ipsa beatae
									veniam tempora sequi. Exercitationem!
								</Typography>
							</div>*/}
						</div>
						<Clients />
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
