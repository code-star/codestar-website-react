import React from 'react';
import Section from '../Section/Section';
import Grid from 'material-ui/Grid';

import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

import styles from './Contact.module.css';
import appStyles from '../App.module.css';

const Contact = () => (
	<Section className={styles.section} id="contact">
		<Grid container spacing={0} alignItems="center">
			<Grid
				item
				xs={12}
				sm={6}
				style={{
					padding: '8px',
				}}
			>
				<Grid container justify="center">
					<Grid item xs={12} md={8}>
						<Grid container>
							<Grid item xs={12} md={6}>
								<FormControl fullWidth>
									<InputLabel htmlFor="name">Name</InputLabel>
									<Input id="name" />
								</FormControl>
							</Grid>

							<Grid item xs={12} md={6}>
								<FormControl fullWidth>
									<InputLabel htmlFor="lastname">Last name</InputLabel>
									<Input id="lastname" />
								</FormControl>
							</Grid>

							<Grid item xs={12} md={6}>
								<FormControl fullWidth>
									<InputLabel htmlFor="company">Company</InputLabel>
									<Input id="company" />
								</FormControl>
							</Grid>

							<Grid item xs={12} md={6}>
								<FormControl fullWidth>
									<InputLabel htmlFor="telephone">Telephone</InputLabel>
									<Input id="telephone" />
								</FormControl>
							</Grid>

							<Grid item xs={12} md={6}>
								<FormControl fullWidth>
									<InputLabel htmlFor="email">Email</InputLabel>
									<Input id="email" type="email" />
								</FormControl>
							</Grid>

							<Grid item xs={12} md={6}>
								<FormControl fullWidth>
									<TextField
										id="message"
										multiline
										placeholder="Your message"
									/>
								</FormControl>
							</Grid>

							<Grid item xs={12} className={appStyles.textCenter}>
								<Button>Send</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={12} sm={6}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.212619226339!2d5.109273615790301!3d52.057652079729266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c665c3d22bd00b%3A0xdcea00cdfeb9dd58!2sCodestar!5e0!3m2!1sen!2snl!4v1519930704938"
					width="100%"
					frameBorder="0"
					style={{ border: 0, display: 'block', height: '100vh' }}
					allowFullScreen
					title="Map"
				/>
			</Grid>
		</Grid>
	</Section>
);

export default Contact;
