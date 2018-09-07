import React from 'react';
import compose from 'recompose/compose';

import { withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  fullHeightMinusNavBar: {
    minHeight: 'calc(100vh - 56px)',
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc(100vh - 64px)',
    },
  },
  fullHeight: {
    minHeight: '100vh',
  },
  containerCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  noPadding: {
    padding: 0,
  },
  marginTopNavBar: {
    marginTop: '56px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '64px',
    },
  },
});

const Container = props => {
  return (
    <div
      className={`
			${props.fluid ? 'container-fluid' : 'container'}
			${props.className ? props.className : ''}
			${props.fullHeightMinusNavBar ? props.classes.fullHeightMinusNavBar : ''}
			${props.fullHeight ? props.classes.fullHeight : ''}
			${props.marginTopNavBar ? props.classes.marginTopNavBar : ''}
			${props.noPadding ? props.classes.noPadding : ''}
			${props.center ? props.classes.containerCenter : ''}
		`}
    >
      {props.children}
    </div>
  );
};
export default compose(
  withStyles(styles),
  withWidth()
)(Container);
