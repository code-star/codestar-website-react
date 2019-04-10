import { TrainingsSection } from './TrainingsSection';
import renderer from 'react-test-renderer';
import React from 'react';
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

// Mock for "t", the translate function from react-i18next
const t = (text: string | string[]) => text;

describe('<TrainingsSection />', () => {
  it('must match the static training section', () => {
    const comp = renderer
      .create(
        <MemoryRouter>
          <TrainingsSection t={t} scrollname="trainings" />
        </MemoryRouter>
      )
      .toJSON();
    expect(comp).toMatchSnapshot();
  });
});
