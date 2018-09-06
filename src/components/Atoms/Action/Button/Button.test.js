import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

const children = <span>awesome button</span>;

const getComponent = variant => <Button variant={variant}>{children}</Button>;

const renderShallow = () => {
	return shallow(getComponent('primary'));
};

describe('<Button />', () => {
	let wrapper;

	describe('Instance', () => {
		test('must be an instance of Button', () => {
			wrapper = renderShallow();
			expect(wrapper.find('Button')).toBeTruthy();
		});

		test('must render children', () => {
			wrapper = renderShallow();
			expect(wrapper).toContainReact(children);
		});
	});

	describe('Snaphot', () => {
		test('must match primary', () => {
			expect(global.renderToJSON(getComponent('primary'))).toMatchSnapshot();
		});

		test('must match secondary', () => {
			expect(global.renderToJSON(getComponent('secondary'))).toMatchSnapshot();
		});

		test('must match tertiary', () => {
			expect(global.renderToJSON(getComponent('tertiary'))).toMatchSnapshot();
		});
	});
});
