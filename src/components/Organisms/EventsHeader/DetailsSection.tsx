import React, { SFC } from 'react';
import { Typography, Button } from '@material-ui/core';
import { translate, TranslationFunction } from 'react-i18next';
import Container from '../../../Container/Container';
import Section from '../../../Section/Section';
import compose from 'recompose/compose';
import TweetList from '../../Molecules/List/TweetList';

// TODO improve types by replacing "any"
interface IDetailsSectionPropsInner {
  t: TranslationFunction;
}

interface IDetailsSectionPropsOuter {
  mEvent: any;
  formattedDate: string;
  descriptionElem: any;
  tweets: any;
}

export const DetailsSection: SFC<
  IDetailsSectionPropsInner & IDetailsSectionPropsOuter
> = ({ t, mEvent, formattedDate, descriptionElem, tweets }) => {
  return (
    <Section scrollname="event-details" className="bg-white">
      <Container center>
        <div className="row">
          <div className="col-12">
            <Typography align="center" variant="title">
              {mEvent.name}
            </Typography>
            <Typography gutterBottom align="center" variant="subheading">
              {formattedDate}
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">{descriptionElem}</div>
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

export default compose<IDetailsSectionPropsInner, IDetailsSectionPropsOuter>(
  translate(['events'], { wait: true })
)(DetailsSection);
