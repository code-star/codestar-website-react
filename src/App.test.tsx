import React from 'react';
import renderer from "react-test-renderer";
import App from './App';

jest.mock('./ScrollToTop', () => 'scroll-to-top');
jest.mock('./Footer/Footer', () => 'footer');
jest.mock('./Jobs/JobsList', () => {
  return [{ path: 'somePath' }, { path: 'someOtherPath' }];
});
jest.mock('./containers/NavContainer/NavContainer', () => 'nav-container');

describe('<App />', () => {
  it('renders the App', () => {
    const comp = renderer.create(<App />).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
