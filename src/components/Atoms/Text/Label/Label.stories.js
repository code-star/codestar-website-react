import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Label from './Label';

storiesOf('Components/Atoms/Text', module)
	.addDecorator(withKnobs)
	.add('Label', () => {
		const color = select('Color', ['grey', 'black', 'blue'], 'grey');

		const size = select('Size', ['tiny', 'small', 'medium', 'large'], 'grey');

		return <Label color={color} size={size} text="Awesome label" />;
	});
