import React from 'react';
import classNames from 'classnames/bind';
import style from './TweetList.module.css';
import Tweet from '../../Card/Tweet';

const cx = classNames.bind(style);

interface ITweetListProps {
	tweets: any[];
}

const TweetList = ({ tweets }: ITweetListProps) => (
	<div className={cx('tweetList')}>
		{tweets.map(tweet => (
			<Tweet
				name={tweet.user.name}
				screenName={tweet.screenName}
				createdAt={tweet.created_at}
				text={tweet.text}
				favoriteCount={tweet.favorite_count}
				retweetCount={tweet.retweet_count}
			/>
		))}
	</div>
);

export default TweetList;
