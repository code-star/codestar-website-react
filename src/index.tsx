import * as React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './i18n'; // Must be loaded before render because of async JSON files
import ReactGA from 'react-ga';
import addBrowserUpdate from './components/Molecules/BrowserUpdate/BrowserUpdateFallback';

addBrowserUpdate('root');

// Google Analytics
ReactGA.initialize('UA-100358098-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
