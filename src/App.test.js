import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

jest.mock('./ScrollToTop', () => 'ScrollToTop');
jest.mock('./Footer/Footer', () => 'Footer');
jest.mock('./Jobs/JobsList', () => {
  return [{ path: 'somePath' }, { path: 'someOtherPath' }];
});
jest.mock('./AsyncComponent/AsyncComponent', () => 'AsyncComponent');
jest.mock('./modules/NavContainer/NavContainer', () => 'NavContainer');

const renderShallow = () => {
  return shallow(<App />);
};

const renderMount = () => {
  return mount(<App />);
};

describe('<App />', () => {
  let wrapper;
  let renderSpy;

  beforeEach(() => {
    renderSpy = jest.spyOn(App.prototype, 'render');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Component Lifecycle', () => {
    test('must call render', () => {
      wrapper = renderShallow();
      expect(renderSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Instance', () => {
    test('must have an instance of App', () => {
      wrapper = renderMount();
      expect(wrapper.find('App')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('default', () => {
      expect(global.renderToJSON(renderShallow())).toMatchSnapshot();
    });
  });
});
