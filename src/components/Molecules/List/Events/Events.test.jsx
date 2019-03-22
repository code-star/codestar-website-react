import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import Events from './Events';

jest.mock('react-i18next', () => ({
  translate: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' };
    return Component;
  },
}));

jest.mock('../../../../i18n', () => ({
  language: 'nl',
}));

jest.mock('@material-ui/core/es/Hidden/Hidden', () => () => <div />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Events
        nextMeetupEvents={[]}
        noNextMeetupEvent={true}
        pastMeetupEvents={[]}
        videos={[]}
      />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
