import React, { SFC, ReactNode } from 'react';
import { Typography, Button } from '@material-ui/core';
import Container from '../../../Container/Container';
import css from './EventsHeader.module.scss';
import compose from 'recompose/compose';
import { translate, TranslationFunction } from 'react-i18next';

interface IPropsInner {
  t: TranslationFunction;
}

interface IPropsOuter {
  children?: ReactNode;
}

const EventsHeaderMessage: SFC<IPropsInner & IPropsOuter> = ({
  t,
  children,
}) => (
  <Container center className="mt-5 mb-3">
    <div className="row">
      <div className="col-12">
        <div className="mt-4">
          <Typography
            gutterBottom
            align="center"
            variant="display2"
            className={css.nextEventText}
          >
            {t('INFO_NO_NEXT_EVENTS')}
          </Typography>
          <div style={{ textAlign: 'center' }}>
            <Button
              color="primary"
              variant="raised"
              href="https://www.meetup.com/Code-Star-Night"
              className="mr-1"
            >
              {t('CODESTAR_ON_MEETUP_COM')}
            </Button>
            <div className="mt-5">{children}</div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default compose<IPropsInner, IPropsOuter>(
  translate(['events'], { wait: true })
)(EventsHeaderMessage);
