import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Button from './Button.tsx';

storiesOf('Components/Action', module)
	.addDecorator(withKnobs)
	.add('Button', () => {
		const variant = select(
			'Variant',
			['primary', 'secondary', 'tertiary'],
			'primary'
		);

		return (
			<Button variant={variant}>
				<span>Awesome {`${variant}`} button</span>
			</Button>
		);
	});
