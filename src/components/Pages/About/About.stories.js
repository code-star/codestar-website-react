import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import About from './About.tsx';
// import tweets from '../../../../../public/mock/get-recent-tweets';

storiesOf('components/Pages/About', module)
  .addDecorator(withKnobs)
  .add('About', () => {
    // return <About />;
  });
