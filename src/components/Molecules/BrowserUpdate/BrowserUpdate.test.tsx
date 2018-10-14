import React from 'react';
import { shallow } from 'enzyme';

import BrowserUpdate from './BrowserUpdate';

const globalAny: any = global;

const renderShallow = () => {
  return shallow(<BrowserUpdate />);
};

describe('<BrowserUpdate />', () => {
  describe('Snaphot', () => {
    it('shows message if window.fetch not defined', () => {
      const originalFetch = globalAny.fetch;
      delete globalAny.fetch;
      expect(globalAny.renderToJSON(renderShallow())).toMatchSnapshot();
      globalAny.fetch = originalFetch;
    });

    it('does not show message if window.fetch is defined', () => {
      expect(globalAny.renderToJSON(renderShallow())).toMatchSnapshot();
    });
  });
});
