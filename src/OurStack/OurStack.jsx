import React, { Component } from 'react';
import { translate } from 'react-i18next';

// TODO: Extract stack into list of objects
@translate(['stack'], { wait: true })
class OurStack extends Component {
	render() {
		const { t } = this.props;
		return (
			<div>
				<h3>{t('STACK_TITLE')}</h3>
				<ul>
					<li>Scala</li>
					<li>Akka</li>
					<li>Spray</li>
					<li>Spark</li>
					<li>Typescript</li>
					<li>Docker</li>
					<li>Mesos</li>
					<li>AWS</li>
					<li>Cassandra</li>
					<li>Kafka</li>
				</ul>
			</div>
		);
	}
}

export default OurStack;
