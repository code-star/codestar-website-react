import React from 'react';
import logo from '../img/logo.svg';
import Reboot from 'material-ui/Reboot';
import Grid from 'material-ui/Grid';
import styles from './Intro.module.css';

const Intro = () => (
	<section id="intro" className={styles.section}>
		<div className={`container ${styles.container}`}>
			<Reboot />
			<Grid container justify="center">
				<Grid item xs={12} md={3}>
					<img src={logo} alt="Logo" />
				</Grid>
			</Grid>
			<Grid container justify="center">
				<Grid item xs={12} md={9}>
					<p className={styles.p}>
						The digital world offers endless possibilities. The challenges are
						often complex. We develop state-of-the-art software that’s simple to
						use. Agile and productive, using the latest techniques. We program
						with our hearts and with our minds, for organisations looking to
						take the next step.
					</p>
					<p className={styles.p}>
						We are the #1 partner for Full Stack Scala and Big Data solutions in
						the Netherlands. We are Codestar.
					</p>
				</Grid>
			</Grid>
		</div>
	</section>
);

export default Intro;
