import React from 'react';
import Container from '../Container/Container';
import Team from './Team';

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

							<h3>OUR CHOICE</h3>
							<ul>
								<li>Scala</li>
								<li>Akka</li>
								<li>Spray</li>
								<li>Spark</li>
								<li>Typescript</li>
								<li>Docker</li>
								<li>Mesos</li>
								<li>AWS</li>
								<li>Cassandra</li>
								<li>Kafka</li>
							</ul>

							<h3>The team</h3>
							<ul>
								{Team.map(person => (
									<li>
										{person.name} - {person.job}
									</li>
								))}
							</ul>

							<h1>Events</h1>

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
