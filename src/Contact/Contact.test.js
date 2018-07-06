import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

it('renders without crashing', () => {
	// jest.mock('react-i18next', () => ({
	// 	// this mock makes sure any components using the translate HoC receive the t function as a prop
	// 	translate: () => Component => {
	// 		Component.defaultProps = { ...Component.defaultProps, t: () => '' };
	// 		return Component;
	// 	},
	// }));

	const div = document.createElement('div');
	ReactDOM.render(<Contact />, div);
	// ReactDOM.unmountComponentAtNode(div);
});
