import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Heading from './Heading.tsx';

storiesOf('Components/Atoms/Text', module)
  .addDecorator(withKnobs)
  .add('Heading', () => {
    const type = select('Type', ['h1', 'h2', 'h3', 'h4'], 'h2');

    return <Heading type={type} text={`Awesome ${type} heading`} />;
  });
