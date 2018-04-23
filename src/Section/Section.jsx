import React from 'react';
import css from './Section.module.css';

import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

const styles = theme => ({
	section: {
		// backgroundSize: 'cover',
		// backgroundPosition: 'center center',
		// [theme.breakpoints.up('md')]: {
		// 	minHeight: '100vh',
		// },
		// [theme.breakpoints.down('sm')]: {
		// 	backgroundImage: 'none !important',
		// },
	},
	fullHeightMinusNavBar: {
		minHeight: 'calc(100vh - 56px)',
		[theme.breakpoints.up('sm')]: {
			minHeight: 'calc(100vh - 64px)',
		},
	},
});

const Section = props => (
	<section
		className={`
			${props.className} 
			${props.classes.section} 
			${props.backgroundVideoSrc ? css.sectionBackgroundVideo : ''}
		`}
		id={props.id}
		style={{
			backgroundImage: props.image ? `url(${props.image})` : 'none',
		}}
	>
		{props.backgroundVideoSrc && (
			<video autoPlay muted loop className={css.fullVideo}>
				<source src={props.backgroundVideoSrc} type="video/mp4" />
			</video>
		)}

		{props.container && (
			<div className={`container ${css.containerCenter}`}>{props.children}</div>
		)}
		{!props.container && props.children}
	</section>
);

export default compose(withStyles(styles), withWidth())(Section);
