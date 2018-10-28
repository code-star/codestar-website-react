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
