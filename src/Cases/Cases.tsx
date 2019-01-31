import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Fade,
  Paper,
  Slide,
  Typography,
  withMobileDialog,
} from '@material-ui/core';
import { withStyles, StyleRules, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { Element, Link } from 'react-scroll';
import compose from 'recompose/compose';
import CaseHeader from '../CaseHeader/CaseHeader';
import Container from '../Container/Container';
import InlineLogo from '../InlineLogo/InlineLogo';
import ResponsiveImage, {
  getResponsiveImageUrl,
} from '../ResponsiveImage/ResponsiveImage';
import { casesList, Case, CasesText, CasesSection } from './CasesList';
import { RouteComponentProps } from 'react-router';

type CasesInnerProps = Readonly<{
  t: TranslationFunction;
  classes: WithStyles['classes'];
  fullScreen: boolean;
}>;
type CasesOuterProps = RouteComponentProps;
type CasesProps = CasesInnerProps & CasesOuterProps;

type CasesState = Readonly<{
  modelOpenFor: Record<string, boolean>;
}>;

const styles: StyleRules<string> = {
  whiteText: {
    color: 'white',
    textAlign: 'left',
    fontFamily: 'Conduit',
    fontSize: '120%',
  },
  linkCursor: {
    cursor: 'pointer',
  },
  noLineHeight: {
    lineHeight: 0,
  },
};

class Cases extends React.Component<CasesProps, CasesState> {
  public orderedCases = [3, 1, 2, 5, 0, 4].map(i => casesList[i]);

  constructor(props: CasesProps) {
    super(props);

    this.state = {
      modelOpenFor: this.orderedCases.reduce(
        (accu: Record<string, boolean>, clientCase) => {
          accu[clientCase.path] =
            this.props.location.hash.slice(1) === clientCase.path &&
            clientCase.readMore
              ? true
              : false;
          return accu;
        },
        {}
      ),
    };
  }

  public render() {
    return (
      <div>
        {this.renderIntro()}
        {this.renderCases()}
      </div>
    );
  }

  public renderIntro() {
    const { t, classes } = this.props;
    return (
      <section>
        <Container marginTopNavBar fullHeight center>
          <div className="row justify-content-around mt-3">
            <Fade in timeout={2000}>
              <div className="col-10 col-lg-6 mx-auto">
                <div className="col-8 p-0">
                  <ResponsiveImage
                    path="/images/codestar_logo_dark.svg"
                    alt="Codestar powered by Ordina Logo"
                    className="mb-3"
                    width="100%"
                  />
                </div>
                <Typography variant="subheading" className={classes.whiteText}>
                  {t('CASES_INTRO_1')}
                </Typography>
                <Typography
                  variant="subheading"
                  className={`${classes.whiteText} mt-2`}
                >
                  {t('CASES_INTRO_2')}
                </Typography>
              </div>
            </Fade>
            {this.renderBoxes()}
          </div>
        </Container>
      </section>
    );
  }

  public renderBoxes() {
    const { classes } = this.props;
    return (
      <Slide in timeout={1000} direction="left">
        <div
          className={`col-12 col-md-10 col-lg-6 my-3 text-center text-sm-left ${
            classes.noLineHeight
          }`}
        >
          {this.orderedCases.map((clientCase, i) => (
            <Link key={i} to={clientCase.path} hashSpy smooth>
              <Fade in timeout={1000}>
                <Paper
                  className={classes.linkCursor}
                  style={{
                    display: 'inline-block',
                    padding: '8px',
                    margin: '5px',
                    backgroundColor: clientCase.color
                      ? clientCase.color
                      : 'transparent',
                    width: '150px',
                    height: '150px',
                  }}
                >
                  <div
                    className="row align-items-center mx-0"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <div className="col-12 p-0">
                      <img
                        src={getResponsiveImageUrl(clientCase.logo, 134 * 2)}
                        alt={clientCase.client}
                        width="100%"
                      />
                    </div>
                  </div>
                </Paper>
              </Fade>
            </Link>
          ))}
        </div>
      </Slide>
    );
  }

  public renderCases() {
    const { t, fullScreen } = this.props;
    return (
      <section>
        {this.orderedCases.map((clientCase: Case, i: number) => {
          const caseText = t(`CASES.${clientCase.path}`, {
            returnObjects: true,
          });
          const { title, intro, sections }: CasesText = caseText;
          const changeState = (isOpen: boolean) => () =>
            this.setState({
              modelOpenFor: {
                ...this.state.modelOpenFor,
                [clientCase.path]: isOpen,
              },
            });

          const img = (
            <ResponsiveImage
              alt={
                clientCase.secondaryCredits
                  ? clientCase.secondaryCredits
                  : clientCase.client
              }
              path={
                clientCase.secondaryImage
                  ? clientCase.secondaryImage
                  : clientCase.image
              }
              width="100%"
              className="mb-3"
            />
          );

          return (
            <Element key={i} name={clientCase.path}>
              <CaseHeader
                {...clientCase}
                readMore={sections !== undefined && sections.length > 0}
                key={clientCase.client}
                title={title}
                intro={intro}
                callback={changeState(true)}
              />
              <Dialog
                fullScreen={fullScreen}
                open={this.state.modelOpenFor[clientCase.path]}
                onClose={changeState(false)}
                scroll={fullScreen ? 'paper' : 'body'}
              >
                <DialogContent style={{ overflow: 'visible' }}>
                  <h1>{clientCase.client}</h1>
                  {title}
                </DialogContent>
                {fullScreen ? null : img}
                <DialogContent>
                  {sections.map((section: CasesSection, si: number) => (
                    <div key={si}>
                      <h4>{section.title}</h4>
                      {section.paragraphs.map((text: string, j: number) => (
                        <p key={j}>
                          <InlineLogo>{text}</InlineLogo>
                        </p>
                      ))}
                    </div>
                  ))}
                  {fullScreen ? img : null}
                  {clientCase.stack ? (
                    <div>
                      <h4>{t('CASES_STACK_TITLE')}</h4>
                      <ul>
                        {(clientCase.stack || []).map(
                          (tech: string, ti: number) => (
                            <li key={ti}>{tech}</li>
                          )
                        )}
                      </ul>
                    </div>
                  ) : null}
                </DialogContent>
                <DialogActions>
                  <Button onClick={changeState(false)} color="primary">
                    {t('CASES_CLOSE_BUTTON')}
                  </Button>
                </DialogActions>
              </Dialog>
            </Element>
          );
        })}
      </section>
    );
  }
}

export default compose<CasesProps, CasesOuterProps>(
  withStyles(styles),
  withMobileDialog(),
  translate(['cases'], { wait: true })
)(Cases);
