import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mocked because of UnhandledPromiseRejectionWarning in Events
jest.mock('./Events/Events', () => () => <div />);
// TODO MvD: If we add a catch to that promise, could this then be removed?

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	// ReactDOM.unmountComponentAtNode(div);
});
