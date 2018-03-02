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

	render() {
		return (
			<Section
				container
				id={`case-${this.props.client.toLowerCase().replace(/\s+/g, '-')}`}
				image={this.props.backgroundImage}
			>
				<Grid
					container
					alignItems="center"
					direction={this.props.even ? 'row' : 'row-reverse'}
				>
					<Grid item xs={0} md={1} />
					<Grid item xs={12} md={5}>
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
					<Grid item xs={0} md={1} />

					{this.state.showDetails &&
						this.props.details && (
							<Grid
								item
								xs={12}
								md={5}
								style={{
									maxHeight: '50vh',
									overflow: 'auto',
								}}
							>
								<Card>
									<CardContent>{this.props.details}</CardContent>
								</Card>
							</Grid>
						)}
				</Grid>
			</Section>
		);
	}
}

export default ClientCase;
