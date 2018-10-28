import React, { SFC } from 'react';
import compose from 'recompose/compose';
import Section from '../../../Section/Section';
import { translate, TranslationFunction } from 'react-i18next';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../../../ResponsiveImage/ResponsiveImage';
import Container from '../../../Container/Container';
import styles from './TrainingsSection.module.scss';

interface IPropsInner {
  t: TranslationFunction;
}

interface IPropsOuter {
  scrollname: any;
}

// Fixme: this is a workaround for using the material ui button
// with the `to` property. By default this is not supported.
const CustomButton = (props: any) => <Button {...props} />;

export const TrainingsSection: SFC<IPropsInner & IPropsOuter> = ({
  t,
  scrollname,
}) => (
  <Section scrollname={scrollname} className={styles.section}>
    <ResponsiveImage
      path="/images/jobs/codestar_4.png"
      asBackgroundImage
      alt="Person receiving training at Codestar"
      effect="/e_grayscale/co_rgb:0057ae,e_colorize:40"
    />
    <Container fullHeight center>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="mt-4">
            <Typography
              variant="display3"
              className={`d-inline text-white p-2 bg-dark`}
            >
              {t('TRAININGS')}
            </Typography>
          </div>
          <div className="my-3">
            <Typography
              variant="headline"
              className={`d-inline text-white p-2`}
            >
              RxJS, Scala, TypeScript {t('TRAININGS')}
            </Typography>
          </div>

          <div className="my-2">
            <CustomButton variant="raised" to="/contact" component={Link}>
              {t('BOOK_A_TRAINING')}
            </CustomButton>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="bg-dark p-3">
            <Typography variant="body1" className="d-inline text-white">
              As experts on functional reactive programming in front-end and
              back-end we love to give trainings on the languages and frameworks
              we use each day. We regularly host trainings, and if you are
              interested in a training or workshop on e.g. RxJS, TypeScript, or
              Scala on a date of your choice contact us for more information.
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

export default compose<IPropsInner, IPropsOuter>(
  translate(['events'], { wait: true })
)(TrainingsSection);
