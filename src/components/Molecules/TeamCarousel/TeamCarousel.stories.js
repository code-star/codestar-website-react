import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import TeamCarousel from './TeamCarousel.tsx';

storiesOf('components/Molecules', module)
  .addDecorator(withKnobs)
  .add('TeamCarousel', () => {
    return <TeamCarousel />;
  });
