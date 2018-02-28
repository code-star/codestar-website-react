import React from 'react';
import Grid from 'material-ui/Grid';
import Section from '../Section/Section';

import styles from './Cases.module.css';
const Cases = () => (
	<Section id="cases" className={styles.section}>
		<Grid container justify="center">
			<Grid item xs={12}>
				<h2 className={styles.h2}>Cases</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
					sapiente tempora libero quos at asperiores deleniti nihil, eos
					placeat, error voluptas rem sunt perspiciatis laboriosam vitae. In quo
					dolores, laudantium.
				</p>
			</Grid>
		</Grid>
	</Section>
);

export default Cases;
