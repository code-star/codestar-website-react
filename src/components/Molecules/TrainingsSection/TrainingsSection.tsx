import React, { SFC } from 'react';
import compose from 'recompose/compose';
import Section from '../../../Section/Section';
import { translate, TranslationFunction } from 'react-i18next';
import { Button, Tooltip, Typography, Grow, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ResponsiveImage, {
  getResponsiveImageUrl,
} from '../../../ResponsiveImage/ResponsiveImage';
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

const getTechIcon: any = (name: string, url: string) => (
  <div className="col d-flex justify-content-center">
    <Tooltip title={name}>
      <Grow in>
        <Avatar alt={name} src={getResponsiveImageUrl(url, 80)} />
      </Grow>
    </Tooltip>
  </div>
);

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
              {t('TRAININGS_TEXT')}
            </Typography>
            <div className="row m-1 mt-2">
              {getTechIcon('Scala', '/images/technologies/scala.svg')}
              {getTechIcon('Kotlin', '/images/technologies/kotlin.svg')}
              {getTechIcon('RxJS', '/images/technologies/rxjs.svg')}
              {getTechIcon('TypeScript', '/images/technologies/typescript.svg')}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

export default compose<IPropsInner, IPropsOuter>(
  translate(['events'], { wait: true })
)(TrainingsSection);