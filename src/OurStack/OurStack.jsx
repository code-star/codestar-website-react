import React, { Component } from 'react';
import { translate } from 'react-i18next';

import techs from './techs';

@translate(['stack'], { wait: true })
class OurStack extends Component {
	render() {
		const { t } = this.props;
		return (
			<div>
				<h3>{t('STACK_TITLE')}</h3>
				<ul>{techs.map((tech, i) => <li key={i}>{tech.name}</li>)}</ul>
			</div>
		);
	}
}

export default OurStack;
