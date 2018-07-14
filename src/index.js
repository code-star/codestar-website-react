import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './i18n'; // Must be loaded before render because of async JSON files

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
