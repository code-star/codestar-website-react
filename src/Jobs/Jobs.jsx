import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'material-ui';

import Container from '../Container/Container';
import OurStack from '../OurStack/OurStack';
import Clients from '../Clients/Clients';
import jobsList from './JobsList';
import JobCard from './JobCard';

const Jobs = () => (
	<React.Fragment>
		<section>
			<Container marginTopNavBar>
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
								We know the underlying principles of object-oriented programming
							</li>
							<li>
								We share our passion at events and at international conferences
							</li>
						</ul>

						<Clients title="Companies that trust on us" />

						<OurStack />
					</div>
				</div>
			</Container>
		</section>
		<section>
			<Container>
				<div className="row">
					<div className="col">
						<h3>Vacancies</h3>
						<div className="d-flex justify-content-center flex-wrap">
							{jobsList.map(job => (
								<JobCard
									translation={job.translation}
									image={job.image}
									path={job.path}
								/>
							))}
						</div>

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
	</React.Fragment>
);

export default Jobs;
