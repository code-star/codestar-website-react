import * as React from 'react';
import { translate } from '../typed-translate';

import { Typography, withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Container from '../Container/Container';
import Clients from '../Clients/Clients';
import AnimatedLogo from '../Animations/AnimatedLogo';
import LandscapeBackground from '../Animations/LandscapeBackground';
import { DelayedFade } from '../Animations/DelayedFade';
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

function withStylesTyped(myStyles: any) {
  return (Component: any) => {
    return withStyles(myStyles)(Component) as any;
  };
}

function withWidthTyped() {
  return (Component: any) => {
    return withWidth()(Component) as any;
  };
}

// Compose Pattern as decorators, recompose dependency not needed anymore
// Based on second-to-last line in chapter https://reactjs.org/docs/higher-order-components.html
// > (This same property also allows connect and other enhancer-style HOCs to be used as decorators, an experimental JavaScript proposal.)
@withStylesTyped(styles)
@withWidthTyped()
@translate(['intro'], { wait: true })
class Intro extends React.Component<IntroProps> {
  public render() {
    const { t, ...props } = this.props;
    const intersperse = (arr: any, sep: any) =>
      arr.reduce((a: any, v: any) => [...a, v, sep], []).slice(0, -1);

    function makeLines(text: any, firstClass: string = '') {
      return text
        .split('.')
        .map((line: string) => line.trim())
        .filter((n: string) => n)
        .map((line: string, i: number) => (
          <Typography
            key={`intro-${i}`}
            variant="subheading"
            className={`${props.classes.whiteText} ${
              firstClass && i === 0 ? firstClass : ''
            }`}
          >
            {intersperse(
              line.split('~').map((subLine: string, si: number) => (
                <span key={si} className={props.classes.line}>
                  <InlineLogo dark small>
                    {subLine}
                  </InlineLogo>
                </span>
              )),
              ' '
            )}
          </Typography>
        ));
    }

    return (
      <div>
        <section id="intro" className={props.classes.section}>
          <Container fullHeightMinusNavBar center marginTopNavBar>
            <LandscapeBackground className={props.classes.fullVideo} />
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6 mb-3">
                <AnimatedLogo lineDuration={200} fadeDuration={3000} />
              </div>
              <div className="col-12">
                <DelayedFade>
                  {makeLines(t('INTRO_TEXT'))}
                  {makeLines(t('INTRO_TEXT_SUBLINE'), 'mt-3')}
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
                  <Typography variant="display1" gutterBottom>
                    {t('NEXT_STEP_TITLE')}
                  </Typography>

                  <Typography variant="subheading" gutterBottom>
                    {t('NEXT_STEP_CONTENT_1')}
                  </Typography>

                  <Typography variant="subheading" gutterBottom>
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

// This is replaced by the decorators above the class:
// export default compose(
//   withStyles(styles),
//   withWidth()
// )(translate(['intro'], { wait: true })(Intro));
export default Intro;
