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

  describe('Component Lifecycle', () => {
    test('calls render', () => {
      wrapper = renderMount();
      expect(wrapper.instance()).toBeInstanceOf(App);
    });
  });

  describe('Instance', () => {
    test('should be an instance of App', () => {
      wrapper = renderShallow();
      expect(wrapper.instance()).toBeInstanceOf(App);
    });
  });

  describe('Snaphot', () => {
    test('default', () => {
      expect(global.renderToJSON(renderShallow())).toMatchSnapshot();
    });
  });
});
