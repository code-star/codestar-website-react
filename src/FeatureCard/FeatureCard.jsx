import React from 'react';
import Card, { /* CardActions, */ CardContent } from 'material-ui/Card';

const FeatureCard = props => (
	<Card className={props.className}>
		<CardContent>
			<h4>{props.title}</h4>
			<p>{props.text}</p>
		</CardContent>
		{/* <CardActions>
								<Button size="small">Learn More</Button>
							</CardActions> */}
	</Card>
);

export default FeatureCard;
