import React from 'react';
import { shallow } from 'enzyme';

import BrowserUpdate from './BrowserUpdate';

const globalAny: any = global;

const renderShallow = () => {
  return shallow(<BrowserUpdate />);
};

describe('<BrowserUpdate />', () => {
  describe('Snaphot', () => {
    it('shows message if Map.prototype.keys not defined', () => {
      const originalMapKeys = globalAny.Map.prototype.keys;
      delete Map.prototype.keys;
      expect(globalAny.renderToJSON(renderShallow())).toMatchSnapshot();
      globalAny.Map.prototype.keys = originalMapKeys;
    });

    it('does not show message if Map.prototype.keys is defined', () => {
      expect(globalAny.renderToJSON(renderShallow())).toMatchSnapshot();
    });
  });
});
