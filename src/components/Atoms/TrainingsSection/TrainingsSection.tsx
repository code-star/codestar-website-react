import React, { SFC } from 'react';
import compose from 'recompose/compose';
import Section from '../../../Section/Section';
import { translate, TranslationFunction } from 'react-i18next';
import { Button, Typography } from '@material-ui/core';
import ResponsiveImage from '../../../ResponsiveImage/ResponsiveImage';
import Container from '../../../Container/Container';
import InlineLogo from '../../../InlineLogo/InlineLogo';

// TODO unit test, storybook

// TODO fix width

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
            <Button variant="raised">
              {t('TRAININGS')} (contact us for bookings) // TODO
            </Button>
          </div>
          {/*{props.readMore && (
            <div className="my-2">
              <Button
                variant="raised"
                onClick={props.callback}
                className={classes.button}
              >
                {t('CASES_READ_MORE_BUTTON')}
              </Button>
            </div>
          )}*/}
        </div>
        <div className="col-12 col-md-6">
          <div className="bg-dark p-3">
            <Typography variant="body1" className="d-inline text-white">
              <InlineLogo dark>
                {t('TRAININGS')} Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aliquid aperiam assumenda commodi deleniti
                doloremque earum eligendi error eum hic incidunt, ipsa itaque
                nihil quas quia quo, repellat tempora veniam voluptate.
              </InlineLogo>
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
