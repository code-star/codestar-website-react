import React from 'react';
import css from './Section.module.css';

import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

const styles = theme => ({
	section: {
		backgroundSize: 'cover',
		backgroundPosition: 'center center',

		[theme.breakpoints.up('md')]: {
			minHeight: '100vh',
		},
		[theme.breakpoints.down('sm')]: {
			backgroundImage: 'none !important',
		},
	},
});

const Section = props => (
	<section
		className={`${props.className} ${props.classes.section}`}
		id={props.id}
		style={{
			backgroundImage: `url('${props.image}')`,
		}}
	>
		{props.container && (
			<div className={`container ${css.container}`}>{props.children}</div>
		)}
		{!props.container && props.children}
	</section>
);

export default compose(withStyles(styles), withWidth())(Section);
