import React from 'react';

import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Container from '../Container/Container';
import Map from '../Map/Map';

import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

const styles = theme => ({
	halfHeightMinusHalfNavBar: {
		minHeight: 'calc(50vh - 28px)',
		[theme.breakpoints.up('sm')]: {
			minHeight: 'calc(50vh - 32px)',
		},
	},
});

const Contact = () => {
	return (
		<section>
			<Map halfHeight />
			<Container className="mt-3">
				<div className="row">
					<div className="col">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
							enim quod. Dolore illum totam nesciunt molestias iure, ipsum
							cumque id, odit non sequi quo animi consectetur ipsa tenetur alias
							natus!
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-6">
						<FormControl fullWidth>
							<InputLabel htmlFor="name">Name</InputLabel>
							<Input id="name" />
						</FormControl>

						<FormControl fullWidth>
							<InputLabel htmlFor="lastname">Last name</InputLabel>
							<Input id="lastname" />
						</FormControl>

						<FormControl fullWidth>
							<InputLabel htmlFor="company">Company</InputLabel>
							<Input id="company" />
						</FormControl>

						<FormControl fullWidth>
							<InputLabel htmlFor="telephone">Telephone</InputLabel>
							<Input id="telephone" />
						</FormControl>

						<FormControl fullWidth>
							<InputLabel htmlFor="email">Email</InputLabel>
							<Input id="email" type="email" />
						</FormControl>
					</div>
					<div className="col-12 col-md-6">
						<FormControl fullWidth>
							<TextField
								label="Message"
								id="message"
								multiline
								placeholder="Your message"
								rows={11}
							/>
						</FormControl>
					</div>
					<div className="col-12">
						<Button>Send</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default compose(withStyles(styles), withWidth())(Contact);
