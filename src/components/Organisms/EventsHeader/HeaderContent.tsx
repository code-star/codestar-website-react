import React, { FC } from 'react'
import { Typography, Button, Hidden, withStyles, createStyles, Theme } from '@material-ui/core'
import Container from '../../../Container/Container'
import { translate, TranslationFunction } from 'react-i18next'
import { Link } from 'react-scroll'
import { purple } from '@material-ui/core/colors'
import compose from 'recompose/compose'
import { IMeetupEvent } from '../../../containers/EventsContainer/EventsContainer.interfaces'

type PropsInner = {
  t: TranslationFunction
  classes: Record<string, string>
}

type PropsOuter = {
  mEvent: IMeetupEvent
  formattedDate: string
  children?: React.ReactNode
}

type Props = PropsInner & PropsOuter

const styles = (theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        color: 'white',
        backgroundColor: purple[700],
      },
    },
    nextEventText: {
      color: 'white',
    },
    nextEventTitle: {
      color: 'white',
      fontWeight: 'bold',
    },
  })

export const HeaderContent: FC<Props> = ({ t, classes, mEvent, formattedDate, children }) => {
  return (
    <Container fullHeight center className="mt-5 mt-sm-2 mt-md-0">
      <div className="row">
        <div className="col-12">
          <Typography align="center" variant="h4" className={classes.nextEventText}>
            {t('OUR_NEXT_EVENT')}
          </Typography>
          <Hidden mdUp>
            <Typography align="center" variant="h3" className={classes.nextEventTitle}>
              {mEvent.name}
            </Typography>
          </Hidden>
          <Hidden smDown>
            <Typography align="center" variant="h1" className={classes.nextEventTitle}>
              {mEvent.name}
            </Typography>
          </Hidden>
          <Typography gutterBottom align="center" variant="h3" className={classes.nextEventTitle}>
            {formattedDate}
          </Typography>
          <div style={{ textAlign: 'center' }}>
            <Button color="primary" variant="contained" href={mEvent.link} className={`mr-1 ${classes.button}`}>
              {t('SIGN_UP')}
            </Button>
            <Link to="event-details" hashSpy smooth>
              <Button variant="contained">{t('MORE_INFO')}</Button>
            </Link>
            <div className="mt-5">{children}</div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default compose<Props, PropsOuter>(
  withStyles(styles),
  translate(['events'], { wait: true })
)(HeaderContent)
