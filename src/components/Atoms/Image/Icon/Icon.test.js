import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

const getComponent = (name, text) => (
  <Icon name={name} width={20} height={20} text={text} />
);

const renderShallow = () => {
  return shallow(getComponent('twitter'));
};

describe('<Icon />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Icon', () => {
      wrapper = renderShallow();
      expect(wrapper.find('Icon')).toBeTruthy();
    });
  });

  describe('Snaphot', () => {
    test('must match cheveron-down', () => {
      expect(
        global.renderToJSON(getComponent('cheveron-down'))
      ).toMatchSnapshot();
    });

    test('must match cheveron-left', () => {
      expect(
        global.renderToJSON(getComponent('cheveron-left'))
      ).toMatchSnapshot();
    });

    test('must match cheveron-right', () => {
      expect(
        global.renderToJSON(getComponent('cheveron-right'))
      ).toMatchSnapshot();
    });

    test('must match cheveron-up', () => {
      expect(
        global.renderToJSON(getComponent('cheveron-up'))
      ).toMatchSnapshot();
    });

    test('must match heart', () => {
      expect(global.renderToJSON(getComponent('heart'))).toMatchSnapshot();
    });

    test('must match swap', () => {
      expect(global.renderToJSON(getComponent('swap'))).toMatchSnapshot();
    });

    test('must match bubble', () => {
      expect(global.renderToJSON(getComponent('bubble'))).toMatchSnapshot();
    });

    test('must match mail', () => {
      expect(global.renderToJSON(getComponent('mail'))).toMatchSnapshot();
    });

    test('must match twitter', () => {
      expect(global.renderToJSON(getComponent('twitter'))).toMatchSnapshot();
    });
  });
});
