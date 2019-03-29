import React, { SFC } from 'react'
import { Link } from 'react-router-dom'
import compose from 'recompose/compose'
import { withStateHandlers } from 'recompose'

import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import { CustomButton } from '../../Atoms/CustomButton/CustomButton'
import i18n from '../../../i18n'

// TODO improve types by replacing "any"
interface IEventsButtonPropsInner {
  classes: Record<string, string>
  label: string
  nextEvent: any
  isHovering: boolean
  handleMouseOver: any
  handleMouseOut: any
}

interface IEventsButtonPropsOuter {
  label: string
  nextEvent: any
}

const styles = (theme: any) => ({
  newEventIcon: {
    color: 'red',
    display: 'inline-block',
    fontSize: '1.3rem',
    marginLeft: theme.spacing.unit * 0.5,
  },
  newEventIconHover: {
    color: 'inherit',
  },
  bigTooltip: {
    fontSize: 20,
  },
})

export const EventsButton: SFC<IEventsButtonPropsInner> = ({ classes, label, nextEvent, isHovering, handleMouseOver, handleMouseOut }) => {
  const doNothing = () => {}
  const iconClasses = `${classes.newEventIcon} ${isHovering ? classes.newEventIconHover : null}`
  let icon = null
  let nextEventText = ''
  if (nextEvent) {
    icon = <span className={iconClasses}> ●</span>
    const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US'
    const formattedDate = new Date(nextEvent.time).toLocaleDateString(locale, {
      month: 'long',
      day: 'numeric',
    })
    nextEventText = `${formattedDate} 🎉Meetup🎉 ${nextEvent.name}`
  }
  return (
    <Tooltip
      title={nextEventText}
      placement="bottom"
      classes={{
        tooltip: classes.bigTooltip,
      }}
    >
      <CustomButton
        component={Link}
        to="/events"
        color="inherit"
        onMouseOver={handleMouseOver}
        onFocus={doNothing}
        onMouseOut={handleMouseOut}
        onBlur={doNothing}
      >
        {label}
        {icon}
      </CustomButton>
    </Tooltip>
  )
}

export const initialState = { isHovering: false }
export const stateUpdaters = {
  // Example of state argument with typing: handleMouseOver: ({ isHovering } : { isHovering: boolean}) => () => ({ isHovering: true }),
  handleMouseOver: () => () => ({ isHovering: true }),
  handleMouseOut: () => () => ({ isHovering: false }),
}

export default compose<IEventsButtonPropsInner, IEventsButtonPropsOuter>(
  withStateHandlers(initialState, stateUpdaters),
  withStyles(styles)
)(EventsButton)
