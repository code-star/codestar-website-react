import React from 'react';
import { shallow } from 'enzyme';

import BrowserUpdate from './BrowserUpdate';

const renderShallow = () => {
  return shallow(<BrowserUpdate />);
};

describe('<BrowserUpdate />', () => {
  describe('Snaphot', () => {
    it('shows message if window.fetch not defined', () => {
      const originalFetch = global.fetch;
      delete global.fetch;
      expect(global.renderToJSON(renderShallow())).toMatchSnapshot();
      global.fetch = originalFetch;
    });

    it('does not show message if window.fetch is defined', () => {
      expect(global.renderToJSON(renderShallow())).toMatchSnapshot();
    });
  });
});
