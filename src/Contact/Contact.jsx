import React, { Component } from 'react';

import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardContent from 'material-ui/Card/CardContent';
import Container from '../Container/Container';
import Map from '../Map/Map';

import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import { translate } from 'react-i18next';

const styles = theme => ({
	halfHeightMinusHalfNavBar: {
		minHeight: 'calc(50vh - 28px)',
		[theme.breakpoints.up('sm')]: {
			minHeight: 'calc(50vh - 32px)',
		},
	},
});

@translate(['contact'], { wait: true })
class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phone: '',
			email: '',
			message: '',
			messageRequiredError: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(ev) {
		ev.preventDefault();

		// Validate the text area
		const hasMessageError = this.state.message === '';
		this.setState({ messageRequiredError: hasMessageError });

		if (!hasMessageError) {
			ev.target.submit();
			console.log(hasMessageError);
		} else {
			console.error(hasMessageError);
		}

		//console.log(this.state);

		// TODO fetch polyfill

		// fetch('/getMusic/music', {
		// 	credentials: 'same-origin',
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		url: this.state.url,
		// 		title: this.state.title,
		// 		artist: this.state.artist,
		// 		album: this.state.album
		// 	})
		// })
		// 	.then(data => data.json())
		// 	.then(data => {
		// 		if(data.status === 'ok') {
		// 			this.props.logInfo(`Get music completed to: ${data.fileName}`);
		// 		} else {
		// 			throw new Error('getMusic music failed');
		// 		}
		// 	})
		// 	.catch(error => this.props.logError('error on getMusic/music: ' + error));
	}

	render() {
		const { t } = this.props;
		const err = this.state.messageRequiredError ? (
			<FormHelperText id="name-error-text">
				{t('REQUIRED_ERROR')}
			</FormHelperText>
		) : null;
		return (
			<section>
				<Container fluid noPadding marginTopNavBar>
					<Map halfHeightMinusHalfNavBar />
				</Container>
				<Container className="mt-3">
					{JSON.stringify(this.state)}

					<form
						action="https://formspree.io/codestar@ordina.nl"
						method="POST"
						onSubmit={this.handleSubmit}
					>
						<Card className="mb-3">
							<CardContent>
								<p>{t('INTRO_TEXT')}</p>
								<div className="row">
									<div className="col-12 col-md-5">
										<FormControl fullWidth>
											<InputLabel htmlFor="name">{t('NAME')}</InputLabel>
											<Input
												id="name"
												name="name"
												onChange={this.handleChange}
											/>
										</FormControl>

										{/*<FormControl fullWidth>
										<InputLabel htmlFor="lastname">Last name</InputLabel>
										<Input id="lastname" />
									</FormControl>

									<FormControl fullWidth>
										<InputLabel htmlFor="company">Company</InputLabel>
										<Input id="company" />
									</FormControl>*/}

										<FormControl fullWidth>
											<InputLabel htmlFor="phone">{t('PHONE')}</InputLabel>
											<Input
												id="phone"
												name="phone"
												onChange={this.handleChange}
											/>
										</FormControl>

										<FormControl fullWidth required={true}>
											<InputLabel htmlFor="email">{t('EMAIL')}</InputLabel>
											<Input
												id="email"
												type="email"
												name="email"
												onChange={this.handleChange}
											/>
										</FormControl>
									</div>
									<div className="col-12 col-md-7">
										<FormControl fullWidth required={true}>
											<TextField
												error={this.state.messageRequiredError}
												label={t('MESSAGE')}
												id="message"
												name="message"
												onChange={this.handleChange}
												multiline
												rows={6}
											/>
											{err}
										</FormControl>
									</div>
								</div>
							</CardContent>
							<CardActions>
								<Button color="primary" type="submit">
									{t('SEND')}
								</Button>
							</CardActions>
						</Card>
					</form>
				</Container>
			</section>
		);
	}
}

export default compose(
	withStyles(styles),
	withWidth()
)(Contact);
