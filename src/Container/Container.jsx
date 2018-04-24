import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

const styles = theme => ({
	fullHeightMinusNavBar: {
		minHeight: 'calc(100vh - 56px)',
		[theme.breakpoints.up('sm')]: {
			minHeight: 'calc(100vh - 64px)',
		},
	},
	containerCenter: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingTop: '1rem',
		paddingBottom: '1rem',
	},
});

const Container = props => {
	return (
		<div
			className={`
			${props.fluid ? 'container-fluid' : 'container'}
			${props.className ? props.className : ''}
			${props.fullHeightMinusNavBar ? props.classes.fullHeightMinusNavBar : ''}
			${props.center ? props.classes.containerCenter : ''}
		`}
		>
			{props.children}
		</div>
	);
};
export default compose(withStyles(styles), withWidth())(Container);
