import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import './index.css';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import i18n from './i18n';

ReactDOM.render(
	<I18nextProvider i18n={i18n}>
		<App />
	</I18nextProvider>,
	document.getElementById('root')
);
registerServiceWorker();
