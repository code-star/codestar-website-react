import React from 'react';
import Card, { /* CardActions, */ CardContent } from 'material-ui/Card';

import styles from './CaseCard.module.css';

const CaseCard = props => (
	<Card
		onClick={() => props.onClickHandler(props.client)}
		className={!props.active ? styles.notActive : null}
	>
		<CardContent>
			<h3>{props.client}</h3>
		</CardContent>
	</Card>
);

export default CaseCard;
