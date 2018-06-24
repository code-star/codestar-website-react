import React from 'react';

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

const Intro = props => (
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
											}/images/logo-codestar-by-ordina.svg`}
											alt="Codestar powered by Ordina Logo"
										/>
									</div>
								</div>
								<Typography
									variant="subheading"
									gutterBottom
									className={props.classes.introText}
								>
									The digital world offers endless possibilities. The challenges
									are often complex. We develop state-of-the-art software that’s
									simple to use. Agile and productive, using the latest
									techniques. We program with our hearts and with our minds, for
									organisations looking to take the next step.
								</Typography>
								<Typography
									variant="subheading"
									gutterBottom
									className={props.classes.introText}
								>
									We are the #1 partner for Full Stack Scala and Big Data
									solutions in the Netherlands. We are Codestar.
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
							Time to take the next step
						</Typography>

						<Typography variant="subheading" gutterBottom>
							Now more than ever, IT is the carrier, deliverer and enricher of
							your business. You will quickly fall behind without an outstanding
							digital infrastructure. With data in abundance, where do you
							start? In the past, if someone asked you for water, you grabbed a
							bucket and went to the well. Today, we’re dealing with a waterfall
							of data. Good luck with your bucket.
						</Typography>

						<Typography variant="subheading" gutterBottom>
							Fortunately, the growth in the amount of data has coincided with
							the development of technologies to work with that data. The modern
							internet, mobile phone use and the ‘Internet of Things’ demands
							more. At, we use Scala, Front-end and BigData technologies to
							create state-of-the-art software which enables you to confront
							challenges head on. Whether you need a bigger bucket, more buckets
							or just a decent pipeline, we can create it for you.
						</Typography>
					</div>
					<div className="col-12 col-md-6">
						<Typography variant="subheading" gutterBottom>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
							neque, vel adipisci exercitationem numquam unde commodi esse ipsum
							necessitatibus, consectetur fuga nihil ducimus dolor ipsa beatae
							veniam tempora sequi. Exercitationem!
						</Typography>
					</div>
				</div>
				<Clients />
			</Container>
		</section>
	</div>
);
export default compose(
	withStyles(styles),
	withWidth()
)(Intro);
