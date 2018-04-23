import React from 'react';
import logo from '../img/logo.svg';
import Grid from 'material-ui/Grid';
import styles from './Intro.module.css';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

const Intro = () => (
	<div>
		<section id="intro" className={styles.backgroundVideoWrapper}>
			<video autoPlay muted loop className={styles.fullVideo}>
				<source src="/2719001.mp4" type="video/mp4" />
			</video>
			<Container fullHeightMinusNavBar center>
				<Grid container justify="center">
					<Grid item xs={12} md={3}>
						<img src={logo} alt="Logo" className={styles.logo} />
					</Grid>
				</Grid>
				<Grid container justify="center">
					<Grid item xs={12} md={9}>
						<div className={styles.bgWhite90}>
							<p className={styles.p}>
								The digital world offers endless possibilities. The challenges
								are often complex. We develop state-of-the-art software that’s
								simple to use. Agile and productive, using the latest
								techniques. We program with our hearts and with our minds, for
								organisations looking to take the next step.
							</p>
							<p className={styles.p}>
								We are the #1 partner for Full Stack Scala and Big Data
								solutions in the Netherlands. We are Codestar.
							</p>

							<p className={styles.p}>
								<Link to="/cases">Go to cases</Link>
							</p>
						</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	</div>
);
export default Intro;
