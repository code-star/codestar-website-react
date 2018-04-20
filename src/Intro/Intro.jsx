import React from 'react';
import logo from '../img/logo.svg';
import CssBaseline from 'material-ui/CssBaseline';
import Grid from 'material-ui/Grid';
import css from './Intro.module.css';
import { Link } from 'react-router-dom';

import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

const styles = theme => ({
	section: {
		[theme.breakpoints.up('md')]: {
			minHeight: '100vh',
		},
	},
});

const Intro = props => (
	<section id="intro" className={`${props.classes.section} ${css.section}`}>
		<CssBaseline />
		<video autoPlay muted loop className={css.fullVideo}>
			<source src="/2719001.mp4" type="video/mp4" />
		</video>
		<div className={`container ${css.containerCenter}`}>
			<Grid container justify="center">
				<Grid item xs={12} md={3}>
					<img src={logo} alt="Logo" className={css.logo} />
				</Grid>
			</Grid>
			<Grid container justify="center">
				<Grid item xs={12} md={9} className={css.grid}>
					<p className={css.p}>
						The digital world offers endless possibilities. The challenges are
						often complex. We develop state-of-the-art software that’s simple to
						use. Agile and productive, using the latest techniques. We program
						with our hearts and with our minds, for organisations looking to
						take the next step.
					</p>
					<p className={css.p}>
						We are the #1 partner for Full Stack Scala and Big Data solutions in
						the Netherlands. We are Codestar.
					</p>

					<p className={css.p}>
						<Link to="/cases">Go to cases</Link>
					</p>
				</Grid>
			</Grid>
		</div>
	</section>
);
export default compose(withStyles(styles), withWidth())(Intro);
