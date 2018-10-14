import React, { SFC, Fragment } from 'react';
import styles from './BrowserUpdate.module.css';

export const TEXT = 'Please upgrade your browser.';

const BrowserUpdate: SFC = () => {
  // Very basic feature detection that excludes IE11
  const showUpdateMessage = !window.fetch;
  return showUpdateMessage ? (
    <div className={styles.browserUpdate}>
      <p>{TEXT}</p>
      <p>
        <a href="https://browser-update.org/update-browser.html">
          More information
        </a>
      </p>
    </div>
  ) : (
    <Fragment />
  );
};

export default BrowserUpdate;
