import React, { SFC } from 'react';
import { withStateHandlers } from 'recompose';
import styles from './BrowserUpdate.module.css';
import compose from 'recompose/compose';

interface IPropsInner {
  isHidden: boolean;
}

export const BrowserUpdate: SFC<IPropsInner> = () => (
  <div className={styles.browserUpdate}>
    <p>Please upgrade your browser.</p>
    <p>
      <a href="https://browser-update.org/update-browser.html">
        More information
      </a>
    </p>
  </div>
);

export const initialState = { isHidden: false };
export const stateUpdaters = {
  // Example of state argument with typing: handleMouseOver: ({ isHovering } : { isHovering: boolean}) => () => ({ isHovering: true }),
  // handleMouseOver: () => () => ({ isHovering: true }),
  // handleMouseOut: () => () => ({ isHovering: false }),
};

export default compose<IPropsInner, {}>(
  withStateHandlers(initialState, stateUpdaters)
)(BrowserUpdate);
