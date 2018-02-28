import React from 'react';
import logo from '../img/logo.svg';
import Reboot from 'material-ui/Reboot';
import Grid from 'material-ui/Grid';

import Features from '../Features/Features';

const styles = {
	h2: {
		textAlign: 'center',
		color: 'white',
	},
	p: {
		color: 'white',
	},
	section: {
		backgroundColor: '#1158a0',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '100vh',
		padding: '1rem 0',
	},
};

const Intro = () => (
	<section id="intro" style={styles.section}>
		<div className="container" style={styles.container}>
			<Reboot />
			<Grid container justify="center">
				<Grid item xs={12} md={3}>
					<img src={logo} alt="Logo" />
				</Grid>
			</Grid>
			<Grid container justify="center">
				<Grid item xs={12} md={9}>
					<p style={styles.p}>
						The digital world offers endless possibilities. The challenges are
						often complex. We develop state-of-the-art software that’s simple to
						use. Agile and productive, using the latest techniques. We program
						with our hearts and with our minds, for organisations looking to
						take the next step.
					</p>
					<p style={styles.p}>
						We are the #1 partner for Full Stack Scala and Big Data solutions in
						the Netherlands. We are Codestar.
					</p>
				</Grid>
			</Grid>
		</div>
	</section>
);

export default Intro;
