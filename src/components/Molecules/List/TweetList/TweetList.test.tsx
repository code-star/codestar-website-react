import React from 'react';
import { shallow } from 'enzyme';

import TweetList from './TweetList';
import { CardContent } from '@material-ui/core';
import renderToJSON from '../../../../setupTests';
import {
  ITweet,
  ITwitterUser,
} from '../../../../containers/EventsContainer/EventsContainer.interfaces';

const someTweets: { data: ITweet[]; author: ITwitterUser } | null = {
  data: [
    {
      id_str: '1',
      created_at: 'Fri Aug 31 13:51:31 +0000 2018',
      text: 'some awesome text',
      id: 1,
    },
    {
      id_str: '2',
      created_at: 'Sun Sep 02 12:40:19 +0000 2018',
      text: 'some other awesome text',
      id: 2,
    },
  ],
  author: {
    name: 'someAwesomeName',
    username: 'someAwesomeScreenName',
    profile_image_url: '',
    id: '1',
  },
};

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
