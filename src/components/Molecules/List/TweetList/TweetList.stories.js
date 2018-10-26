import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import TweetList from './TweetList.tsx';
import tweets from '../../../../../public/mock/get-recent-tweets';

storiesOf('components/Molecules/List', module)
  .addDecorator(withKnobs)
  .add('TweetList', () => {
    return <TweetList tweets={tweets.slice(0, 5)} />;
  });
