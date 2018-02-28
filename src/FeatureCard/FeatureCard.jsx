import React from 'react';
import './FeatureCard.css';
import Card, { /* CardActions, */ CardContent } from 'material-ui/Card';

const FeatureCard = props => (
	<Card className={props.className}>
		<CardContent>
			<h4 className="text-center">{props.title}</h4>
			<div className="text-center">
				<svg viewBox="0 0 100 100">
					<use
						xlinkHref={`${props.logo}#icon`}
						className={`svg-logo-features svg-logo-${props.id}`}
					/>
				</svg>
			</div>
			<p>{props.text}</p>
		</CardContent>
		{/* <CardActions>
								<Button size="small">Learn More</Button>
							</CardActions> */}
	</Card>
);

export default FeatureCard;
