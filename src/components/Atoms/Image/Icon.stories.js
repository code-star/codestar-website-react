import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Icon from './Icon.tsx';

storiesOf('Components/Atoms/Image', module)
	.addDecorator(withKnobs)
	.add('Icon', () => {
		const name = select(
			'Name',
			[
				'cheveron-down',
				'cheveron-left',
				'cheveron-right',
				'cheveron-up',
				'heart',
				'swap',
				'bubble',
				'mail',
				'twitter',
			],
			'twitter'
		);

		return <Icon name={name} width={20} height={20} />;
	});
