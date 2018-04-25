import React from 'react';
import Container from '../Container/Container';
import { Button } from 'material-ui';
import { Link } from 'react-router-dom';

const Jobs = () => {
	return (
		<div>
			<section>
				<Container>
					<div className="row">
						<div className="col">
							<h3>THIS IS WHY YOU WANT TO WORK FOR US</h3>
							<ul>
								<li>
									We’re not afraid to say it out loud: We’re very, very good
								</li>
								<li>We decide how we work</li>
								<li>We’re never done learning</li>
								<li>
									We know the underlying principles of functional programming
								</li>
								<li>
									We know the underlying principles of object-oriented
									programming
								</li>
								<li>
									We share our passion at events and at international
									conferences
								</li>
							</ul>
						</div>
					</div>
				</Container>
			</section>
			<section>
				<Container>
					<div className="row">
						<div className="col">
							<h3>Vacancies</h3>
							<ul>
								<li>Senior Scala Developer</li>
								<li>Junior Scala Developer</li>
								<li>Front-End Developer</li>
								<li>Big Data Engineer</li>
							</ul>

							<p>
								Not sure yet? Know more{' '}
								<Button component={Link} to="/about" color="inherit">
									About Us
								</Button>
							</p>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
};
export default Jobs;
