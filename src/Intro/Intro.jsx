import React from 'react';
import logo from '../img/logo.svg';
import Reboot from 'material-ui/Reboot';
import Button from 'material-ui/Button';

import Features from '../Features/Features';

const Intro = () => (
	<section
		id="intro"
		style={{
			backgroundColor: '#1158a0',
		}}
	>
		<div className="container d-flex justify-content-center flex-column mh-full">
			<Reboot />
			<div className="row">
				<div className="col col-md-8 offset-md-2 text-center">
					<div className="row">
						<div className="col col-md-6 offset-md-3">
							<img src={logo} alt="Logo" />
						</div>
					</div>
					<p>
						The digital world offers endless possibilities. The challenges are
						often complex. We develop state-of-the-art software that’s simple to
						use. Agile and productive, using the latest techniques. We program
						with our hearts and with our minds, for organisations looking to
						take the next step.
					</p>
					<p>
						We are the #1 partner for Full Stack Scala and Big Data solutions in
						the Netherlands. We are Codestar.
					</p>

					<h3>Difference</h3>
					<Button variant="raised" color="primary">
						Contact
					</Button>
				</div>
			</div>
			<Features />
		</div>
	</section>
);

export default Intro;
