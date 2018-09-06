import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Tweet from './Tweet.tsx';
import { tweets } from '../../../../data/events/tweets';

const {
	created_at,
	favorite_count,
	retweet_count,
	user: { name, screen_name },
} = tweets[3];

storiesOf('Components/Molecules/Card', module)
	.addDecorator(withKnobs)
	.add('Tweet', () => {
		const knobs = {
			name: text('Name', name),
			screenName: text('Screen Name', screen_name),
			createdAt: text('Created At', created_at),
			text: text('Text', tweets[3].text),
			favoriteCount: number('Favorite Count', favorite_count),
			retweetCount: number('Retweet Count', retweet_count),
		};

		return (
			<Tweet
				name={knobs.name}
				screenName={knobs.screenName}
				createdAt={knobs.createdAt}
				text={knobs.text}
				favoriteCount={knobs.favoriteCount}
				retweetCount={knobs.retweetCount}
			/>
		);
	});
