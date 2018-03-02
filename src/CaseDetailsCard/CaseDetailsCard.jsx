import React from 'react';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Modal from 'material-ui/Modal';
import Grid from 'material-ui/Grid';

class CaseDetailsCard extends React.Component {
	state = {
		showDetails: false,
	};

	readMore = ev => {
		this.setState({
			showDetails: true,
		});
	};

	render() {
		return (
			<Card>
				<CardContent>
					<h4>{this.props.title}</h4>
					{this.props.text.map((text, i) => <p key={`p-${i}`}>{text}</p>)}
					<Modal open={this.state.showDetails}>
						<div
							className="container"
							style={{
								backgroundColor: 'white',
							}}
						>
							<Grid container justify="center">
								<Grid item xs={12}>
									{this.props.details}
								</Grid>
							</Grid>
						</div>
					</Modal>
				</CardContent>
				{this.props.details &&
					!this.state.showDetails && (
						<CardActions>
							<Button size="small" onClick={this.readMore}>
								Read More
							</Button>
						</CardActions>
					)}
			</Card>
		);
	}
}

export default CaseDetailsCard;
