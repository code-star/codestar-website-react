import React, { Component } from 'react';
import compose from 'recompose/compose';
import { translate } from 'react-i18next';

import {
	Input,
	InputLabel,
	TextField,
	FormControl,
	FormHelperText,
	Button,
	Card,
	CardActions,
	CardContent,
	withWidth,
	Collapse,
	Fade,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Container from '../Container/Container';
import Map from '../Map/Map';

const styles = theme => ({
	halfHeightMinusHalfNavBar: {
		minHeight: 'calc(50vh - 28px)',
		[theme.breakpoints.up('sm')]: {
			minHeight: 'calc(50vh - 32px)',
		},
	},
});

@translate(['contact'], { wait: true })
export class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phone: '',
			email: '',
			message: '',
			messageRequiredError: false,
			showFetchSuccess: false,
			showFetchFailure: false,
			showMap: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ showMap: true });
		}, 300);
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
			let url =
				'https://2sif0durcj.execute-api.eu-west-1.amazonaws.com/dev/static-site-mailer';
			let options = {
				method: 'POST',
				body: JSON.stringify({
					name: this.state.name,
					phone: this.state.phone,
					email: this.state.email,
					message: this.state.message,
				}),
			};
			if (process.env.REACT_APP_STAGE === 'dev') {
				url = '/mock/staticSiteMailer.json';
				options = {
					method: 'GET',
				};
			}
			// Fetch is supported in all evergreen browsers, but not IE 11 or Opera Mini. Polyfill not added at this time.
			fetch(url, options)
				.then(data => data.json())
				.then(data => {
					if (data.message && data.message.MessageId) {
						this.setState({
							showFetchSuccess: true,
						});
					} else {
						console.log('Fetch failure: no MessageId in response');
						this.setState({
							showFetchFailure: true,
						});
					}
				})
				.catch(error => {
					console.log('Fetch failure:' + error);
					this.setState({
						showFetchFailure: true,
					});
				});
		}
	}

	render() {
		const { t } = this.props;
		const err = this.state.messageRequiredError ? (
			<FormHelperText id="name-error-text">
				{t('REQUIRED_ERROR')}
			</FormHelperText>
		) : null;
		const showFetchSuccess = this.state.showFetchSuccess ? (
			<div
				style={{
					backgroundColor: '#33eb91',
					marginTop: '1em',
					padding: '0.8em',
				}}
			>
				{t('FETCH_SUCCESS')}
			</div>
		) : null;
		const showFetchFailure = this.state.showFetchFailure ? (
			<div
				style={{
					backgroundColor: '#f44336',
					color: 'white',
					marginTop: '1em',
					padding: '0.8em',
				}}
			>
				{t('FETCH_FAILURE')}
			</div>
		) : null;
		return (
			<section>
				<Container fluid noPadding marginTopNavBar>
					<Collapse in={this.state.showMap}>
						<Map halfHeightMinusHalfNavBar />
					</Collapse>
				</Container>
				<Container className="mt-3">
					<Fade in timeout={2000}>
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
									{showFetchSuccess}
									{showFetchFailure}
								</CardContent>
								<CardActions>
									<Button color="primary" type="submit">
										{t('SEND')}
									</Button>
								</CardActions>
							</Card>
						</form>
					</Fade>
				</Container>
			</section>
		);
	}
}

export default compose(
	withStyles(styles),
	withWidth()
)(Contact);
