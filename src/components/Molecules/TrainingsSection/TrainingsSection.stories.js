import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import TrainingsSection from './TrainingsSection'

const stories = storiesOf('components/Molecules/TrainingsSection', module)

stories.add('TrainingsSection', () => (
  <MemoryRouter>
    <TrainingsSection />
  </MemoryRouter>
))
