import React, { Component } from 'react';

import Container from '../Container/Container';
import Clients from '../Clients/Clients';
import AnimatedLogo from '../Animations/AnimatedLogo';
import LandscapeBackground from '../Animations/LandscapeBackground';

import Typography from 'material-ui/Typography';

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
		width: '100vw',
		height: '100vh',
		top: '0',
		left: '0',
		zIndex: -1,
	},
	card: {
		backgroundColor: 'black',
	},
	introText: {
		color: 'white',
		textAlign: 'justify',
		textAlignLast: 'center',
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
					<LandscapeBackground className={props.classes.fullVideo} />
					<Container fullHeight center>
						<div className="row justify-content-center">
							<div className="col-12 col-md-6">
								<div className="row justify-content-center">
									<div className="col-12 col-md-12 mb-3 mt-2">
										<AnimatedLogo lineDuration={200} fadeDuration={3000} />
									</div>
								</div>
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
