import React from 'react';
import logo from '../img/logo.svg';
import CssBaseline from 'material-ui/CssBaseline';
import Grid from 'material-ui/Grid';
import Section from '../Section/Section';
import styles from './Intro.module.css';
import { Link } from 'react-router-dom';

const Intro = () => (
	<Section
		container
		id="intro"
		className={styles.section}
		backgroundVideoSrc="/2719001.mp4"
	>
		<CssBaseline />
		<div className={`container ${styles.container}`}>
			<Grid container justify="center">
				<Grid item xs={12} md={3}>
					<img src={logo} alt="Logo" className={styles.logo} />
				</Grid>
			</Grid>
			<Grid container justify="center">
				<Grid item xs={12} md={9} className={styles.grid}>
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

					<p className={styles.p}>
						<Link to="/cases">Go to cases</Link>
					</p>
				</Grid>
			</Grid>
		</div>
	</Section>
);

export default Intro;
