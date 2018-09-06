import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

const getComponent = type => (
	<Heading type={type} text={`Awesome ${type} heading`} />
);

const renderShallow = () => {
	return shallow(getComponent('h1'));
};

describe('<Heading />', () => {
	let wrapper;

	describe('Instance', () => {
		test('must be an instance of Heading', () => {
			wrapper = renderShallow();
			expect(wrapper.find('Heading')).toBeTruthy();
		});
	});

	describe('Snaphot', () => {
		test('must match h1', () => {
			expect(global.renderToJSON(getComponent('h1'))).toMatchSnapshot();
		});

		test('must match h2', () => {
			expect(global.renderToJSON(getComponent('h2'))).toMatchSnapshot();
		});

		test('must match h3', () => {
			expect(global.renderToJSON(getComponent('h3'))).toMatchSnapshot();
		});

		test('must match h4', () => {
			expect(global.renderToJSON(getComponent('h4'))).toMatchSnapshot();
		});
	});
});
