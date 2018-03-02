import React from 'react';
import Grid from 'material-ui/Grid';
import Section from '../Section/Section';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';

class ClientCase extends React.Component {
	state = {
		showDetails: false,
	};

	showDetails = () => {
		this.setState({
			showDetails: true,
		});
	};

	hideDetails = () => {
		this.setState({
			showDetails: false,
		});
	};

	render() {
		return (
			<Section className="d-flex " full image={this.props.backgroundImage}>
				<Grid
					container
					spacing={0}
					alignItems="center"
					direction={this.props.even ? 'row' : 'row-reverse'}
				>
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
								<Card>
									<CardContent>
										<h2>{this.props.client}</h2>
										<h3>{this.props.title}</h3>
										{this.props.text.map((paragraph, i) => (
											<p key={i}>{paragraph}</p>
										))}

										{this.props.details &&
											!this.state.showDetails && (
												<CardActions>
													<Button onClick={this.showDetails}>Read more</Button>
												</CardActions>
											)}
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Grid>
					{this.state.showDetails &&
						this.props.details && (
							<Grid
								item
								xs={12}
								sm={6}
								style={{
									backgroundColor: 'rgba(255,255,255, 0)',
									minHeight: '100vh',
								}}
							>
								<Grid container spacing={0} justify="center">
									<Grid item xs={12}>
										<Card
											style={{
												minHeight: '100vh',
											}}
										>
											<CardContent>{this.props.details}</CardContent>
											<CardActions>
												<Button onClick={this.hideDetails}>Close</Button>
											</CardActions>
										</Card>
									</Grid>
								</Grid>
							</Grid>
						)}
				</Grid>
			</Section>
		);
	}
}

export default ClientCase;
