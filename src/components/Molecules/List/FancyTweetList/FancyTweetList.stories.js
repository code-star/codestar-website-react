import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import FancyTweetList from './FancyTweetList.tsx';
import tweets from '../../../../../build/mock/get-recent-tweets';

storiesOf('Components/Molecules/List', module)
  .addDecorator(withKnobs)
  .add('FancyTweetList', () => {
    return <FancyTweetList tweets={tweets.slice(0, 5)} />;
  });
