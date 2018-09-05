import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button.tsx';

storiesOf('Components/Atoms/Action', module)
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
