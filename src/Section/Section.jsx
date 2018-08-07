import React from 'react';
import compose from 'recompose/compose';
import { withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Element } from 'react-scroll';

const styles = theme => {
	const heightMobileNavbar = 56;
	const heightNavbar = 64;

	return {
		section: {
			position: 'relative',
			padding: `${heightMobileNavbar / 2}px 0`,
			[theme.breakpoints.up('sm')]: {
				padding: `${heightNavbar / 2}px 0`,
			},
		},
		element: {
			position: 'absolute',
			top: -1 * heightMobileNavbar,
			width: '100%',
			height: '100%',
			visibility: 'hidden',
			pointerEvents: 'none',
			[theme.breakpoints.up('sm')]: {
				top: -1 * heightNavbar,
			},
		},
	};
};

const Section = props => (
	<section
		name={props.scrollname ? props.scrollname : null}
		className={`
			${props.className ? props.className : null}
			${props.scrollname ? props.classes.section : null}`}
	>
		{props.scrollname && (
			<Element name={props.scrollname} className={props.classes.element} />
		)}
		{props.children}
	</section>
);

export default compose(
	withStyles(styles),
	withWidth()
)(Section);
