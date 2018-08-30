import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading.tsx';

storiesOf('Heading', module)
	.add('h1', () => <Heading type="h1" text="Some h1 Heading" />)
	.add('h2', () => <Heading type="h2" text="Some h2 Heading" />)
	.add('h3', () => <Heading type="h3" text="Some h3 Heading" />)
	.add('h4', () => <Heading type="h4" text="Some h4 Heading" />);
