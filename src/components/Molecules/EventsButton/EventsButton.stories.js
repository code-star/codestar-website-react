import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { MemoryRouter } from 'react-router-dom'
import EventsButton from './EventsButton'

const stories = storiesOf('components/Molecules/EventsButton', module)

stories.addDecorator(withKnobs)

stories.add('with upcoming event', () => {
  const labelValue = text('Button label', 'Events')
  const nextEventNameValue = text('Next event name', 'My Event')
  const nextEventDateValue = text('Next event date', new Date(1540643542266))
  const nextEventValue = {
    time: nextEventDateValue,
    name: nextEventNameValue,
  }
  return (
    <MemoryRouter>
      <EventsButton label={labelValue} nextEvent={nextEventValue} />
    </MemoryRouter>
  )
})
