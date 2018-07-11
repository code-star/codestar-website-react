import React from 'react';
import '../Animations/delayedFade.css';

const DelayedFade = props => {
	const { panLeft, panRight, panUp, panDown } = props;

	let className = undefined;
	if (panLeft) {
		className = 'delayedFadeInPanLeft';
	} else if (panRight) {
		className = 'delayedFadeInPanRight';
	} else if (panUp) {
		className = 'delayedFadeInPanUp';
	} else if (panDown) {
		className = 'delayedFadeInPanDown';
	} else {
		className = 'delayedFadeIn';
	}

	return <div className={className}>{props.children}</div>;
};

export default DelayedFade;
