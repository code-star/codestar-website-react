import * as React from 'react';
import { translate } from '../typed-translate';

import { Typography, WithStyles, withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';

import Container from '../Container/Container';
import Clients from '../Clients/Clients';
// @ts-ignore
import { AnimatedLogo } from '../components/Molecules/AnimatedLogo/AnimatedLogo';
// @ts-ignore
import { LandscapeBackground } from '../components/Molecules/LandscapeBackground/LandscapeBackground';
// @ts-ignore
import { DelayedFade } from '../components/Molecules/DelayFade/DelayedFade';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import InlineLogo from '../InlineLogo/InlineLogo';

type IntroProps = any;

const styles: any = (theme: any) => ({
  section: {
    position: 'relative',
    overflow: 'hidden',
  },
  fullVideo: {
    position: 'absolute',
    width: '100vw',
    height: '100%',
    minWidth: '650px',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: -1,
  },
  whiteText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Conduit',
    fontSize: '120%',
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  line: {
    display: 'inline-block',
  },
});

// FIXME: any type
const intersperse = (arr: JSX.Element[], sep: string) =>
  arr.reduce((acc: JSX.Element[], prev: any) => [...acc, prev, sep], []).slice(0, -1);

const makeLines = (
  classes: WithStyles['classes'],
  text: string,
  firstClass: string = ''
) => {
  return text
    .split('.')
    .map((line: string) => line.trim())
    .filter((n: string) => n)
    .map((line: string, i: number) => (
      <Typography
        key={`intro-${i}`}
        variant="subtitle1"
        className={`${classes.whiteText} ${
          firstClass && i === 0 ? firstClass : ''
        }`}
      >
        {intersperse(
          line.split('~').map((subLine: string, si: number) => (
            <span key={si} className={classes.line}>
              <InlineLogo dark small>
                {subLine}
              </InlineLogo>
            </span>
          )),
          ' '
        )}
      </Typography>
    ));
};

// TODO detect Chrome and disable LandscapeBackground (or switch to static) -> or other way around and whitelist Firefox

class Intro extends React.Component<IntroProps> {
  public render() {
    const { t, classes } = this.props;

    return (
      <div>
        <section id="intro" className={classes.section}>
          <Container fullHeightMinusNavBar center marginTopNavBar>
            <LandscapeBackground className={classes.fullVideo} />
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6 mb-3">
                <AnimatedLogo lineDuration={200} fadeDuration={3000} />
              </div>
              <div className="col-12">
                <DelayedFade>
                  {makeLines(classes, t('INTRO_TEXT'))}
                  {makeLines(classes, t('INTRO_TEXT_SUBLINE'), 'mt-3')}
                </DelayedFade>
              </div>
            </div>
          </Container>
        </section>
        <section id="next-step" className="py-5 bg-white">
          <Container center>
            <div className="row">
              <div className="col-12 col-md-6">
                <InlineLogo>
                  <Typography variant="h4" gutterBottom>
                    {t('NEXT_STEP_TITLE')}
                  </Typography>

                  <Typography variant="subtitle1" gutterBottom>
                    {t('NEXT_STEP_CONTENT_1')}
                  </Typography>

                  <Typography variant="subtitle1" gutterBottom>
                    {t('NEXT_STEP_CONTENT_2')}
                  </Typography>
                </InlineLogo>
              </div>
              <div className="col-12 col-md-6">
                <ResponsiveImage
                  width="100%"
                  path="/images/bucket_waterfall.png"
                  alt="What to do?"
                />
              </div>
            </div>
          </Container>
        </section>
        <section
          id="clients"
          className="py-5"
          style={{ backgroundColor: '#eeeeee' }}
        >
          <Container center>
            <Link to="/cases">
              <Clients />
            </Link>
          </Container>
        </section>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withWidth()
)(translate(['intro'], { wait: true })(Intro));
