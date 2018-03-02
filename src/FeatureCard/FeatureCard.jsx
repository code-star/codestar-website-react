import React from 'react';
import Card, { CardContent } from 'material-ui/Card';

import styles from './FeatureCard.module.css';

const FeatureCard = props => (
	<Card className={`${props.className}`}>
		<CardContent>
			<h4 className={styles.title}>{props.title}</h4>
			<div className={styles.logoWrapper}>
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
	</Card>
);

export default FeatureCard;
