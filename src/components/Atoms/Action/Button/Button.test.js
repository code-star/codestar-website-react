import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

const children = <span>awesome button</span>;

const getButton = variant => <Button variant={variant}>{children}</Button>;

const renderShallow = () => {
	return shallow(getButton('primary'));
};

describe.only('<Button />', () => {
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
			expect(global.renderToJSON(getButton('primary'))).toMatchSnapshot();
		});

		test('must match secondary', () => {
			expect(global.renderToJSON(getButton('secondary'))).toMatchSnapshot();
		});

		test('must match tertiary', () => {
			expect(global.renderToJSON(getButton('tertiary'))).toMatchSnapshot();
		});
	});
});
