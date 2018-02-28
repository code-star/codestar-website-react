import React from 'react';
import styles from './FeatureCard.module.css';
import Card, { /* CardActions, */ CardContent } from 'material-ui/Card';

const FeatureCard = props => (
	<Card className={props.className}>
		<CardContent>
			<h4 className="text-center">{props.title}</h4>
			<div className="text-center">
				<svg viewBox="0 0 100 100" className={styles.svg}>
					<use
						xlinkHref={`${props.logo}#icon`}
						className={`
							${styles.svgLogoFeatures}
							${props.id && styles[props.id]}
						`}
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
// ${styles.svg-logo-${props.id}}
