import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import TweetList from './TweetList.tsx';
import { tweets } from '../../../../data/events/tweets';

storiesOf('Components/Molecules/List', module)
	.addDecorator(withKnobs)
	.add('TweetList', () => {
		return <TweetList tweets={tweets.slice(0, 5)} />;
	});
