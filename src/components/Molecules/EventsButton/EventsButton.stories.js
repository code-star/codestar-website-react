import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { MemoryRouter } from 'react-router-dom'
import EventsButton from './EventsButton'
import i18n from '../../../i18n'

const stories = storiesOf('components/Molecules/EventsButton', module)

stories.addDecorator(withKnobs)

stories.add('with upcoming event', () => {
  const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US'

  const labelValue = text('Button label', 'Events')
  const nextEventNameValue = text('Next event name', 'My Event')
  const nextEventDateValue = text(
    'Next event date',
    new Date().toLocaleDateString(locale, {
      month: 'long',
      day: 'numeric',
    })
  )
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
