import React, { SFC, Fragment } from 'react';
import styles from './BrowserUpdate.module.css';

export const TEXT1 = 'Please upgrade your browser.';
export const TEXT2 = 'More information';
export const URL = 'https://browser-update.org/update-browser.html';
// Very basic feature detection that excludes IE11
export const showUpdateMessage = () => !Map.prototype.keys;

const BrowserUpdate: SFC = () => {
  return showUpdateMessage() ? (
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
