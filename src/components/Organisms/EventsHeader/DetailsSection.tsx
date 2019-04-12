import React, { SFC, ReactNode } from 'react';
import { Typography, Button } from '@material-ui/core';
import { translate, TranslationFunction } from 'react-i18next';
import Container from '../../../Container/Container';
import Section from '../../Molecules/Section/Section';
import compose from 'recompose/compose';
import TweetList from '../../Molecules/List/TweetList';
import {
  IMeetupEvent,
  ITweet,
} from '../../../containers/EventsContainer/EventsContainer.interfaces';

interface IDetailsSectionPropsInner {
  t: TranslationFunction;
}

interface IDetailsSectionPropsOuter {
  mEvent: IMeetupEvent;
  formattedDate: string;
  descriptionElem: ReactNode;
  tweets: ITweet[];
}

export const DetailsSection: SFC<
  IDetailsSectionPropsInner & IDetailsSectionPropsOuter
> = ({ t, mEvent, formattedDate, descriptionElem, tweets }) => {
  return (
    <Section scrollname="event-details" className="bg-white">
      <Container center>
        <div className="row">
          <div className="col-12 col-md-8">
            <Typography align="center" variant="h6">
              {mEvent.name}
            </Typography>
            <Typography gutterBottom align="center" variant="subtitle1">
              {formattedDate}
            </Typography>
            {descriptionElem}
          </div>
          <div className="col-12 col-md-4">
            <TweetList
              tweets={tweets}
              eventDate={formattedDate}
              eventImage={mEvent.coverUrl}
              eventName={mEvent.name}
            >
              <Button color="primary" href={mEvent.link}>
                {t('SIGN_UP')}
              </Button>
            </TweetList>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default compose<
  IDetailsSectionPropsInner & IDetailsSectionPropsOuter,
  IDetailsSectionPropsOuter
>(translate(['events'], { wait: true }))(DetailsSection);
