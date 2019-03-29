import * as React from 'react'
import { translate, TranslationFunction } from 'react-i18next'
import Container from '../../../Container/Container'
import styles from './CodeChallenge.module.scss'
import ResponsiveImage from '../../../ResponsiveImage/ResponsiveImage'
import { Button } from '@material-ui/core'

type CodeChallangeProps = Readonly<{
  t: TranslationFunction
}>

function asParagraph(text: string[]) {
  return text.map(toParagraph)
}

function toParagraph(text: string, key: number) {
  return (
    <p key={key} className={styles.whiteText}>
      {text}
    </p>
  )
}

function asLines(text: string[]) {
  return text.map(toLines)
}

function toLines(text: string, key: number) {
  return (
    <span key={key}>
      {text}
      <br />
    </span>
  )
}

function asMonospace(text: string[]) {
  return <pre>{text.map(toLines)}</pre>
}

class Component extends React.Component<CodeChallangeProps> {
  public render() {
    const { t } = this.props
    return (
      <div>
        <section className={`py-5 ${styles.codeChallenge}`}>
          <Container marginTopNavBar>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                <h2>Codelancer</h2>

                <h4>{t('INTRODUCTION_TITLE')}</h4>
                <p>{t('INTRODUCTION')}</p>
                <ResponsiveImage className={styles.image} path={'/images/initial-cargo.png'} />
                {asParagraph(t('INTRODUCTION_PART_TWO', { returnObjects: true }))}

                <h4>{t('SITUATION_TITLE')}</h4>
                {asLines(t('SITUATION', { returnObjects: true }))}

                <h4>{t('SHIP_TITLE')}</h4>
                <p>{t('SHIP')}</p>
                {asMonospace(t('SHIP_TABLE', { returnObjects: true }))}

                <h4>{t('MAP_TITLE')}</h4>
                <p>{t('MAP')}</p>
                {asMonospace(t('MAP_TABLE', { returnObjects: true }))}

                <div>
                  <Button className={styles.downloadButton} href={'/code-challenge/planets.csv'} variant="contained" color="primary">
                    {t('MAP_CSV_DOWNLOAD_TEXT')}
                  </Button>
                  <Button className={styles.downloadButton} href={'/code-challenge/planets.json'} variant="contained" color="primary">
                    {t('MAP_JSON_DOWNLOAD_TEXT')}
                  </Button>
                </div>

                <p>{t('MAP_DOWNLOAD')}</p>
                <h4>{t('RULES_TITLE')}</h4>
                {asLines(t('RULES', { returnObjects: true }))}

                <h4>{t('POINTERS_TITLE')}</h4>
                <p>{t('POINTERS')}</p>
                <ResponsiveImage className={styles.image} path={'/images/Example.png'} />
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
    )
  }
}

export default translate(['challenge'], { wait: true })(Component)
