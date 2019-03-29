import React, { FC, ReactNode } from 'react'
import { Typography, Button, createStyles, withStyles, WithStyles } from '@material-ui/core'
import Container from '../../../Container/Container'
import compose from 'recompose/compose'
import { translate, TranslationFunction } from 'react-i18next'

interface IPropsInner {
  t: TranslationFunction
  classes: WithStyles['classes']
}

interface IPropsOuter {
  children?: ReactNode
}

const styles = () =>
  createStyles({
    nextEventText: {
      color: 'white',
    },
  })

const EventsHeaderMessage: FC<IPropsInner & IPropsOuter> = ({ t, children, classes }) => (
  <Container center className="mt-5 mb-3">
    <div className="row">
      <div className="col-12">
        <div className="mt-4">
          <Typography gutterBottom align="center" variant="h3" className={classes.nextEventText}>
            {t('INFO_NO_NEXT_EVENTS')}
          </Typography>
          <div style={{ textAlign: 'center' }}>
            <Button color="primary" variant="contained" href="https://www.meetup.com/Code-Star-Night" className="mr-1">
              {t('CODESTAR_ON_MEETUP_COM')}
            </Button>
            <div className="mt-5">{children}</div>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default compose<IPropsInner, IPropsOuter>(
  withStyles(styles),
  translate(['events'], { wait: true })
)(EventsHeaderMessage)
