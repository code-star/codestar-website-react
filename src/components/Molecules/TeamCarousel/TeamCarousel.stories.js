import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamCarousel from './TeamCarousel.tsx';

storiesOf('components/Molecules/TeamCarousel', module).add(
  'TeamCarousel',
  () => {
    return <TeamCarousel />;
  }
);
