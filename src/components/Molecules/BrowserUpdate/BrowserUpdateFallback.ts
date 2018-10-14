/**
 * This implementation works even when React can't be loaded.
 */
import { TEXT } from './BrowserUpdate'; // TODO remove
// import styles from './BrowserUpdate.module.css';

/* tslint:disable */ const addBrowserUpdate = (elementId: any) => {
  const elem = document.createElement('div');
  elem.setAttribute(
    'style',
    `
    background-color: white;
    border: 0.5em solid red;
    font-size: 200%;
    font-weight: bold;
    min-height: 6em;
    margin-top: 4rem;
    padding: 1em;
    text-align: center;
  `
  );
  const textNode = document.createTextNode(TEXT);
  const aElem = document.createElement('a');
  aElem.setAttribute('href', 'https://browser-update.org/update-browser.html');
  const aTextNode = document.createTextNode('b');
  aElem.appendChild(aTextNode);
  elem.appendChild(textNode);
  elem.appendChild(aElem);

  const currentDiv = document.getElementById(elementId);
  document.body.insertBefore(elem, currentDiv);
};

export default addBrowserUpdate;
