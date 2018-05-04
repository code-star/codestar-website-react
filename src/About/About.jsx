import React from 'react';
import Container from '../Container/Container';
import Team from './Team';
import OurStack from '../OurStack/OurStack';
import Avatar from 'material-ui/Avatar';

import { Button } from 'material-ui';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

import css from './About.module.css';

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const About = () => (
	<div>
		<section>
			<Container>
				<div className="row">
					<div className="col">
						<h3>WE PROGRAM</h3>
						<p>
							We love our job: Programming. At the end of the day, the code is
							all that matters. We write that code. Clean code, that works. We
							program Scala, but also Typescript, JavaScript and sometimes
							Haskell. We’re multilingual and we’re not afraid to learn new
							languages.
						</p>

						<OurStack />

						<Typography variant="headline">The team</Typography>
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
											src={`/images/team/${person.image}`}
											className={`${css.avatar} m-auto`}
										/>
										<Typography variant="body1" className={`text-center mt-1`}>
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
		<section>
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
export default About;
