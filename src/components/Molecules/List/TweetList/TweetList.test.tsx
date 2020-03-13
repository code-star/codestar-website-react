import React from 'react';
import { shallow } from 'enzyme';

import TweetList from './TweetList';
import { CardContent } from '@material-ui/core';
import renderToJSON from '../../../../setupTests';

const someTweets = [
  {
    user: {
      name: 'someAwesomeName',
      screen_name: 'someAwesomeScreenName',
    },
    created_at: 'Fri Aug 31 13:51:31 +0000 2018',
    text: 'some awesome text',
    favorite_count: 3,
    retweet_count: 5,
    id: 1,
  },
  {
    user: {
      name: 'someOtherAwesomeName',
      screen_name: 'someOtherAwesomeScreenName',
    },
    created_at: 'Sun Sep 02 12:40:19 +0000 2018',
    text: 'some other awesome text',
    favorite_count: 1,
    retweet_count: 2,
    id: 2,
  },
];

const renderShallow = (tweets: any) => {
  return shallow(
    <TweetList tweets={tweets} eventImage="a" eventDate="b" eventName="c" />
  );
};

describe('<TweetList />', () => {
  let wrapper;

  describe('Instance', () => {
    it('must have an instance of CardContent', () => {
      wrapper = renderShallow(someTweets);
      expect(wrapper.find(CardContent)).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    it('must match some tweet list', () => {
      expect(renderToJSON(renderShallow(someTweets).get(0))).toMatchSnapshot();
    });
  });
});
