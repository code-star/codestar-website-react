import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import renderToJSON from "./setupTests";

jest.mock('./ScrollToTop', () => 'scroll-to-top');
jest.mock('./Footer/Footer', () => 'footer');
jest.mock('./Jobs/JobsList', () => {
  return [{ path: 'somePath' }, { path: 'someOtherPath' }];
});
jest.mock('./containers/NavContainer/NavContainer', () => 'nav-container');

const renderShallow = () => {
  return shallow(<App />);
};

const renderMount = () => {
  return mount(<App />);
};

describe('<App />', () => {
  let renderSpy: jest.SpyInstance;

  beforeEach(() => {
    renderSpy = jest.spyOn(App.prototype, 'render');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Component Lifecycle', () => {
    it('must call render', () => {
      renderShallow();
      expect(renderSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Instance', () => {
    it('must have an instance of App', () => {
      const wrapper = renderMount();
      expect(wrapper.find('App')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    it('default', () => {
      expect(renderToJSON(renderShallow().get(0))).toMatchSnapshot();
    });
  });
});
