import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';
import Icon from './Icon.tsx';

storiesOf('Components/Atoms/Image', module)
	.addDecorator(withKnobs)
	.add('Icon', () => {
		const name = select(
			'Variant',
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
