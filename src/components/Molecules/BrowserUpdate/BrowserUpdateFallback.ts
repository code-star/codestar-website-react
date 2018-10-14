/**
 * This implementation works even when React can't be loaded.
 */
import { TEXT1, TEXT2, URL } from './BrowserUpdate';

// TODO unit test

const createLink = (url: string, label: string) => {
  const aElem = document.createElement('a');
  aElem.setAttribute('href', url);
  const aTextNode = document.createTextNode(label);
  aElem.appendChild(aTextNode);
  return aElem;
};

const createParagraph = (childElem: any) => {
  const elem = document.createElement('p');
  // const textNode = document.createTextNode(text);
  elem.appendChild(childElem);
  return elem;
};

const createTextNode = (text: string) => document.createTextNode(text);

const addBrowserUpdate = (elementId: string) => {
  // Very basic feature detection that excludes IE11
  if (window.fetch) {
    return;
  }
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
  // const textNode = document.createTextNode(TEXT1);
  elem.appendChild(createParagraph(createTextNode(TEXT1)));
  elem.appendChild(createParagraph(createLink(URL, TEXT2)));

  const currentDiv = document.getElementById(elementId);
  document.body.insertBefore(elem, currentDiv);
};

export default addBrowserUpdate;
