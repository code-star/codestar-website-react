import React, { SFC } from 'react';
import compose from 'recompose/compose';
import Section from '../../../Section/Section';
import { translate, TranslationFunction } from 'react-i18next';

// TODO unit test, storybook

interface IPropsInner {
  t: TranslationFunction;
}

interface IPropsOuter {
  scrollname: any;
}

export const TrainingsSection: SFC<IPropsInner & IPropsOuter> = ({
  t,
  scrollname,
}) => (
  <Section scrollname={scrollname}>
    <h1>{t('TRAININGS')}</h1>
    hoi
  </Section>
);

export default compose<IPropsInner, IPropsOuter>(
  translate(['events'], { wait: true })
)(TrainingsSection);
