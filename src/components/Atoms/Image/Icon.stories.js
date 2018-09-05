import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Icon from './Icon.tsx';
import { EIcon } from '../../../utility/enumeration';

const {
	cheveronDown,
	cheveronLeft,
	cheveronRight,
	cheveronUp,
	heart,
	swap,
	bubble,
	mail,
	twitter,
} = EIcon;

storiesOf('Components/Atoms/Image', module)
	.addDecorator(withKnobs)
	.add('Icon', () => {
		const knobs = {
			name: select(
				'Name',
				[
					cheveronDown,
					cheveronLeft,
					cheveronRight,
					cheveronUp,
					heart,
					swap,
					bubble,
					mail,
					twitter,
				],
				'twitter'
			),
			text: text('Text', 7),
		};

		return <Icon name={knobs.name} width={20} height={20} text={knobs.text} />;
	});
