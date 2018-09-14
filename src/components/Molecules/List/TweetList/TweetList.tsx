import React from 'react';
import cx from 'classnames';
import Tweet from '../../Card/Tweet';

interface ITweetListProps {
  tweets: any[];
  className?: string;
}

const TweetList = ({ tweets, className = '' }: ITweetListProps) => {
  if (tweets.length > 0) {
    return (
      <div className={cx(className)}>
        {tweets.map((tweet, index) => (
          <Tweet
            key={index}
            name={tweet.user.name}
            screenName={tweet.user.screen_name}
            createdAt={tweet.created_at}
            text={tweet.text}
            favoriteCount={tweet.favorite_count}
            retweetCount={tweet.retweet_count}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default TweetList;
