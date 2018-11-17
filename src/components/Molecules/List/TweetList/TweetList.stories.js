import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from '@material-ui/core';
import TweetList from './TweetList.tsx';
import tweets from '../../../../../public/mock/get-recent-tweets';

storiesOf('components/Molecules/List', module)
  .addDecorator(withKnobs)
  .add('TweetList', () => (
    <TweetList
      tweets={tweets.slice(0, 5)}
      eventDate="December 13, 2018"
      eventImage="https://secure.meetupstatic.com/photos/event/3/5/b/b/600_473173755.jpeg"
      eventName="Data Oriented Design with Maxim Zaks"
    >
      <Button size="small" color="primary" href="#">
        Sign Up
      </Button>
    </TweetList>
  ));
