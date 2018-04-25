import React from 'react';
import Grid from 'material-ui/Grid';
import Section from '../Section/Section';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Container from '../Container/Container';

function createMarkup(template) {
	return { __html: template };
}

const ClientCase = props => (
	<section>
		<Container fullHeightMinusNavBar>
			<div className="row">
				<div className="col">
					<h1>Client Case</h1>
					<h1>{props.client}</h1>
					<h2>{props.title}</h2>
					<div>{props.details && props.details}</div>
				</div>
			</div>
		</Container>
	</section>
);

export default ClientCase;
