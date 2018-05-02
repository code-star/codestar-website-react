import React from 'react';
import Container from '../Container/Container';
import Team from './Team';
import OurStack from '../OurStack/OurStack';
import Avatar from 'material-ui/Avatar';

import { Button } from 'material-ui';
import { Link } from 'react-router-dom';

const About = () => {
	return (
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

							<h3>The team</h3>
							<div className="d-flex justify-content-center flex-wrap">
								{Team.map(person => (
									<Avatar
										key={person.image}
										alt={person.name}
										title={person.name}
										src={`/images/team/${person.image}`}
										style={{
											width: 120,
											height: 120,
											margin: 10,
										}}
									/>
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
};
export default About;
