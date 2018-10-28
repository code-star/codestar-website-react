import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { MemoryRouter } from 'react-router-dom';
import EventsButton from './EventsButton';

const stories = storiesOf('components/Atoms/EventsButton', module);

stories.addDecorator(withKnobs);

const label = 'Button label';
const defaultValue = 'Events';
const groupId = 'GROUP-ID1';

const value = text(label, defaultValue, groupId);

stories.add('with upcoming event', () => (
  <MemoryRouter>
    <EventsButton
      label={value}
      nextEvent={{
        time: 1540643542266,
        name: 'test',
      }}
    />
  </MemoryRouter>
));
