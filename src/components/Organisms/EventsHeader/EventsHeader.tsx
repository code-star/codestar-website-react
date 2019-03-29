import React, { FC } from 'react'
import i18n from '../../../i18n'
import sanitizeHtml from 'sanitize-html'
import { createStyles, Typography, withStyles } from '@material-ui/core'
import ResponsiveImage from '../../../ResponsiveImage/ResponsiveImage'
import EventsHeaderButton from './EventsHeaderButton'
import { navButtons } from './constants'
import EventsHeaderMessage from './EventsHeaderMessage'
import HeaderContent from './HeaderContent'
import DetailsSection from './DetailsSection'
import { IMeetupEvent, ITweet } from '../../../containers/EventsContainer/EventsContainer.interfaces'
import compose from 'recompose/compose'

type PropsInner = {
  classes: Record<string, string>
}

type PropsOuter = {
  nextMeetupEvents: IMeetupEvent[]
  noNextMeetupEvent: boolean
  tweets: ITweet[]
}

type Props = PropsInner & PropsOuter

const styles = () =>
  createStyles({
    // Prevent section overflow
    section: {
      position: 'relative',
      overflow: 'hidden',
    },
  })

const EventsHeader: FC<Props> = ({ nextMeetupEvents, noNextMeetupEvent, tweets, classes }) => {
  const renderNavButtons = () => {
    return navButtons.map(config => {
      return <EventsHeaderButton key={config.label} label={config.label} icon={config.icon} to={config.to} href={config.href} />
    })
  }

  let headerContent = null
  let detailsSection = null
  const meetupEvent = nextMeetupEvents && nextMeetupEvents.length > 0 ? nextMeetupEvents[0] : null
  if (meetupEvent) {
    const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US'
    const formattedDate = new Date(meetupEvent.time).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    const cleanDescription = meetupEvent.description ? sanitizeHtml(meetupEvent.description) : ''
    const descriptionElem = <Typography component="p" dangerouslySetInnerHTML={{ __html: cleanDescription }} />
    headerContent = (
      <HeaderContent mEvent={meetupEvent} formattedDate={formattedDate}>
        {renderNavButtons()}
      </HeaderContent>
    )
    detailsSection = <DetailsSection mEvent={meetupEvent} formattedDate={formattedDate} descriptionElem={descriptionElem} tweets={tweets} />
  } else if (noNextMeetupEvent) {
    headerContent = <EventsHeaderMessage>{renderNavButtons()}</EventsHeaderMessage>
  }

  return (
    <>
      <section className={classes.section}>
        <ResponsiveImage
          path="/images/events/2017-09-28%20Andre%20Staltz%20RxJS.jpg"
          asBackgroundImage
          effect="e_art:fes"
          alt="Andre Staltz presenting to a crowd at the Codestar Night meetup of September of 2018"
        />
        {headerContent}
      </section>
      {detailsSection}
    </>
  )
}

export default compose<Props, PropsOuter>(withStyles(styles))(EventsHeader)
