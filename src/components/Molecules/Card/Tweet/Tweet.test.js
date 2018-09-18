import React from 'react';
import { shallow } from 'enzyme';

import Tweet from './Tweet';

const getComponent = ({
  name,
  screenName,
  createdAt,
  text,
  favoriteCount,
  retweetCount,
}) => (
  <Tweet
    name={name}
    screenName={screenName}
    createdAt={createdAt}
    text={text}
    favoriteCount={favoriteCount}
    retweetCount={retweetCount}
  />
);

const someTweet = {
  name: 'someAwesomeName',
  screenName: 'someAwesomeScreenName',
  createdAt: 'Fri Aug 31 13:51:31 +0000 2018',
  text: 'some awesome text',
  favoriteCount: 3,
  retweetCount: 5,
};

const renderShallow = () => {
  return shallow(getComponent(someTweet));
};

describe('<Tweet />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Tweet', () => {
      wrapper = renderShallow();
      expect(wrapper.find('Tweet')).toBeTruthy();
    });
  });

  describe('Snaphot', () => {
    test('must match some tweet', () => {
      expect(global.renderToJSON(getComponent(someTweet))).toMatchSnapshot();
    });
  });
});
