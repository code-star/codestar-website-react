import React from 'react';
import { shallow } from 'enzyme';

import TweetList from './TweetList';

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
  },
];

const renderShallow = tweets => {
  return shallow(<TweetList tweets={tweets} />);
};

describe('<TweetList />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of TweetList', () => {
      wrapper = renderShallow(someTweets);
      expect(wrapper.find('TweetList')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match some tweet list', () => {
      expect(global.renderToJSON(renderShallow(someTweets))).toMatchSnapshot();
    });
  });
});
