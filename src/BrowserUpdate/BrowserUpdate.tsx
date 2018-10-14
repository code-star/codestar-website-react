import React from 'react';
import styles from './BrowserUpdate.module.css';

const BrowserUpdate = () => (
  <div className={styles.browserUpdate}>
    <p>Please upgrade your browser.</p>
    <p>
      <a href="https://browser-update.org/update-browser.html">
        More information
      </a>
    </p>
  </div>
);

export default BrowserUpdate;
