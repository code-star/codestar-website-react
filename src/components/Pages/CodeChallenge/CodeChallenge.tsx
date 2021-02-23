import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import Container from '../../../Container/Container';
import styles from './CodeChallenge.module.scss';
import ResponsiveImage from '../../../ResponsiveImage/ResponsiveImage';
import { Button, createStyles, withStyles } from '@material-ui/core';
import compose from 'recompose/compose';
import Leaderboard from '../../Molecules/Leaderboard/Leaderboard';

type CodeChallengeProps = Readonly<{
  classes: any;
  t: TranslationFunction;
}>;

function asParagraph(text: string[]) {
  return text.map(toParagraph);
}

function toParagraph(text: string, key: number) {
  return (
    <p key={key} className={styles.whiteText}>
      {text}
    </p>
  );
}

function asLines(text: string[]) {
  return text.map(toLines);
}

function toLines(text: string, key: number) {
  return (
    <span key={key}>
      {text}
      <br />
    </span>
  );
}

function asMonospace(text: string[]) {
  return <pre>{text.map(toLines)}</pre>;
}

const styles1 = () =>
  createStyles({
    root: {
      background:
        'url("code-challenge/shot-by-cerqueira-0o_GEzyargo-unsplash.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
    test: {
      fontFamily: 'Vibrocentric-Regular, serif',
    },
  });

class Component extends React.Component<CodeChallengeProps> {
  public render() {
    const { t, classes } = this.props;
    return (
      <div className={classes.root}>
        <section className={`py-5 ${styles.codeChallenge}`}>
          <Container marginTopNavBar>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                <h2 className={classes.test}>Codelancer</h2>

                <Leaderboard />

                <h4>{t('INTRODUCTION_TITLE')}</h4>
                <p>{t('INTRODUCTION')}</p>
                <ResponsiveImage
                  className={styles.image}
                  path={'/images/initial-cargo.png'}
                />
                {asParagraph(
                  t('INTRODUCTION_PART_TWO', { returnObjects: true })
                )}

                <h4>{t('SITUATION_TITLE')}</h4>
                {asLines(t('SITUATION', { returnObjects: true }))}

                <h4>{t('SHIP_TITLE')}</h4>
                <p>{t('SHIP')}</p>
                {asMonospace(t('SHIP_TABLE', { returnObjects: true }))}

                <h4>{t('MAP_TITLE')}</h4>
                <p>{t('MAP')}</p>
                {asMonospace(t('MAP_TABLE', { returnObjects: true }))}

                <div>
                  <Button
                    className={styles.downloadButton}
                    href={'/code-challenge/planets.csv'}
                    variant="contained"
                    color="primary"
                  >
                    {t('MAP_CSV_DOWNLOAD_TEXT')}
                  </Button>
                  <Button
                    className={styles.downloadButton}
                    href={'/code-challenge/planets.json'}
                    variant="contained"
                    color="primary"
                  >
                    {t('MAP_JSON_DOWNLOAD_TEXT')}
                  </Button>
                </div>

                <p>{t('MAP_DOWNLOAD')}</p>
                <h4>{t('RULES_TITLE')}</h4>
                {asLines(t('RULES', { returnObjects: true }))}

                <h4>{t('POINTERS_TITLE')}</h4>
                <p>{t('POINTERS')}</p>
                <ResponsiveImage
                  className={styles.image}
                  path={'/images/Example.png'}
                />
                {asLines(t('POINTERS_PART_TWO', { returnObjects: true }))}

                <h4>{t('SOLUTION_TITLE')}</h4>
                <p>{t('SOLUTION')}</p>
                {asMonospace(t('SOLUTION_JSON', { returnObjects: true }))}

                <h4>{t('CHALLENGES_TITLE')}</h4>
                <h5>{t('CHALLENGE_1_TITLE')}</h5>
                {asLines(t('CHALLENGE_1', { returnObjects: true }))}
                <h5>{t('CHALLENGE_2_TITLE')}</h5>
                {asLines(t('CHALLENGE_2', { returnObjects: true }))}

                <h4>{t('READING_FILES_TITLE')}</h4>
                <p>{t('READING_FILES')}</p>
                <h5>{t('EXAMPLE_1_TITLE')}</h5>
                {asMonospace(t('EXAMPLE_1', { returnObjects: true }))}
                <h5>{t('EXAMPLE_2_TITLE')}</h5>
                {asMonospace(t('EXAMPLE_2', { returnObjects: true }))}
                <h5>{t('EXAMPLE_3_TITLE')}</h5>
                {asMonospace(t('EXAMPLE_3', { returnObjects: true }))}
              </div>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}

export default compose<CodeChallengeProps, {}>(
  withStyles(styles1),
  translate(['challenge'], { wait: true })
)(Component);
