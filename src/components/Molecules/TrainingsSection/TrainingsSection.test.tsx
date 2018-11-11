import React from 'react';
import { shallow } from 'enzyme';
import TrainingsSection from './TrainingsSection';
import { MemoryRouter } from 'react-router';

jest.mock('react-i18next', () => ({
  translate: () => (Component: any) => {
    Component.defaultProps = Component.defaultProps || {};
    Component.defaultProps.t = () => '';
    return Component;
  },
}));

jest.mock('@material-ui/core/Grow', () => (Component: any) => {
  const React = require('react');
  return <div>{Component.children}</div>;
});

const globalAny: any = global;

const renderShallow = () => {
  return shallow(
    <MemoryRouter>
      <TrainingsSection scrollname="trainings" />
    </MemoryRouter>
  );
};

describe('<TrainingsSection />', () => {
  describe('Snaphot', () => {
    test('must match the static training section', () => {
      expect(globalAny.renderToJSON(renderShallow())).toMatchSnapshot();
    });
  });
});
