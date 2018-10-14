import React, { SFC, Fragment } from 'react';
import styles from './BrowserUpdate.module.css';

export const TEXT1 = 'Please upgrade your browser.';
export const TEXT2 = 'More information';
export const URL = 'https://browser-update.org/update-browser.html';

const BrowserUpdate: SFC = () => {
  // Very basic feature detection that excludes IE11
  const showUpdateMessage = !window.fetch;
  return showUpdateMessage ? (
    <div className={styles.browserUpdate}>
      <p>{TEXT1}</p>
      <p>
        <a href={URL}>{TEXT2}</a>
      </p>
    </div>
  ) : (
    <Fragment />
  );
};

export default BrowserUpdate;
