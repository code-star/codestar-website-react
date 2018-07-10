import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { Button } from 'material-ui';
import Typography from 'material-ui/Typography';

import Container from '../Container/Container';
import Team from './Team';
import OurStack from '../OurStack/OurStack';
import Avatar from 'material-ui/Avatar';

import css from './About.module.css';

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

@translate(['about'], { wait: true })
class About extends Component {
	render() {
		const { t } = this.props;
		return (
			<div>
				<section className="py-3">
					<Container marginTopNavBar>
						<div className="row justify-content-center pt-5 pb-5">
							<div className="col-12 col-md-8">
								<h3 className={css.whiteText}>{t('ABOUT_ATTRACT_TITLE')}</h3>
								<p className={[css.whiteText, css.conduit].join(' ')}>
									{t('ABOUT_ATTRACT_TEXT')}
								</p>
							</div>
							<div className="col-12 col-md-8 col-sd-6">
								<OurStack />
							</div>
						</div>
					</Container>
				</section>
				<section className="py-3 bg-white">
					<Container fullHeight>
						<div className="row">
							<div className="col">
								<Typography variant="headline">
									{t('ABOUT_TEAM_TITLE')}
								</Typography>
								<div className="d-flex justify-content-center flex-wrap">
									{shuffleArray(Team)
										.filter(
											person =>
												person && !person.gone && person.name && person.image
										)
										.map(person => (
											<div className={css.avatarWrapper} key={person.image}>
												<Typography variant="caption" className={css.tagline}>
													{person.tagline}
												</Typography>
												<Avatar
													alt={person.name}
													title={person.name}
													src={`${process.env.PUBLIC_URL}/images/team/${
														person.image
													}`}
													className={`${css.avatar} m-auto`}
												/>
												<Typography
													variant="body1"
													className={`text-center mt-1`}
												>
													{person.name} - {person.job}
												</Typography>
											</div>
										))}
								</div>

								<h1>Gallery</h1>

								<h1>Events</h1>
								<h1>Jobs</h1>
								<p>
									Already in love? Check out{' '}
									<Button component={Link} to="/jobs" color="inherit">
										Our Vacancies
									</Button>
								</p>
							</div>
						</div>
					</Container>
				</section>
				<section className="py-3 bg-white">
					<Container fluid>
						<div className="row">
							<div className="col">
								<h1>Photos</h1>
							</div>
						</div>
					</Container>
				</section>
			</div>
		);
	}
}

export default About;
