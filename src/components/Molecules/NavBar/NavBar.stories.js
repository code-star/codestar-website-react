import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

storiesOf('components/Molecules/NavBar', module).add('NavBar', () => (
  <MemoryRouter>
    <NavBar />
  </MemoryRouter>
));
