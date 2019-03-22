import React, { FC } from 'react';
import compose from 'recompose/compose';
import {createStyles, Theme, withWidth} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Element } from 'react-scroll';

interface IPropsInner {}

interface IPropsOuter {
  scrollname: string;
  className?: string;
  classes?: any;
}

const styles = ({breakpoints}: Theme) => {
  const heightMobileNavbar = 56;
  const heightNavbar = 64;

  return createStyles({
    section: {
      position: 'relative',
      padding: `${heightMobileNavbar / 2}px 0`,
      [breakpoints.up('sm')]: {
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
      [breakpoints.up('sm')]: {
        top: -1 * heightNavbar,
      },
    },
  });
};

const Section: FC<IPropsInner & IPropsOuter> = ({
  scrollname,
  className,
  classes,
  children,
}) => (
  <section
    // @ts-ignore
    name={scrollname ? scrollname : null}
    className={`
			${className ? className : null}
			${scrollname ? classes.section : null}`}
  >
    {scrollname && <Element name={scrollname} className={classes.element} />}
    {children}
  </section>
);

export default compose<IPropsInner & IPropsOuter, IPropsOuter>(
  withStyles(styles),
  withWidth()
)(Section);
