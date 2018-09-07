import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

const getComponent = (color, size) => (
  <Label color={color} size={size} text="Awesome label" />
);

const renderShallow = () => {
  return shallow(getComponent('grey', 'medium'));
};

describe('<Label />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Label', () => {
      wrapper = renderShallow();
      expect(wrapper.find('Label')).toBeTruthy();
    });
  });

  describe('Snaphot', () => {
    test('must match blue ~ tiny', () => {
      expect(
        global.renderToJSON(getComponent('blue', 'tiny'))
      ).toMatchSnapshot();
    });

    test('must match blue ~ small', () => {
      expect(
        global.renderToJSON(getComponent('blue', 'tiny'))
      ).toMatchSnapshot();
    });

    test('must match blue ~ medium', () => {
      expect(
        global.renderToJSON(getComponent('blue', 'medium'))
      ).toMatchSnapshot();
    });

    test('must match blue ~ large', () => {
      expect(
        global.renderToJSON(getComponent('blue', 'large'))
      ).toMatchSnapshot();
    });
  });
});
