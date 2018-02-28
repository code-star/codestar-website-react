import React from 'react';
import Section from '../Section/Section';
import Grid from 'material-ui/Grid';

import styles from './Contact.module.css';
const Contact = () => (
	<Section className={styles.section} id="contact">
		<Grid container justify="center">
			<Grid item xs={12}>
				<h2 className={styles.h2}>Contact</h2>
				<p className={styles.p}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
					sapiente tempora libero quos at asperiores deleniti nihil, eos
					placeat, error voluptas rem sunt perspiciatis laboriosam vitae. In quo
					dolores, laudantium.
				</p>
			</Grid>
		</Grid>
	</Section>
);

export default Contact;
