import React, { FC } from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import {Fade, Slide, Typography} from '@material-ui/core';
import compose from 'recompose/compose';
import Container from '../../../Container/Container';
import Section from '../../Molecules/Section/Section';
import { withStyles } from '@material-ui/core/styles';
import Publications from '../../Molecules/Publications/Publications';
import { styles } from '../About/About.styles';

interface IPropsInner {
  classes: any;
  t: TranslationFunction;
}

interface IPropsOuter {}

export const PublicationsPage: FC<IPropsInner> = ({ t, classes }) => {
  const [publicationsText0, publicationsText1] = t('PUBLICATIONS_TEXTS', {
    returnObjects: true,
  });
  return (
    <Section scrollname={'publications'}>
      <Container marginTopNavBar>
        <div className="row justify-content-center">
          <div className={`col-12 col-md-8 ${classes.text}`}>
            <Fade in timeout={2000}>
              <div className="mb-4">
                <Typography variant="h2" color="inherit" gutterBottom>
                  {t('PUBLICATIONS_TITLE')}
                </Typography>
                <Typography variant="body1" color="inherit" gutterBottom>
                  {publicationsText0}
                  <a href="https://youtube.com/codestar" className={classes.link}>Codestar YouTube</a>
                  {publicationsText1}
                </Typography>
              </div>
            </Fade>
            <Slide in timeout={1000} direction="up">
              <div>
                <Publications />
              </div>
            </Slide>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default compose<IPropsInner, IPropsOuter>(
  withStyles(styles),
  translate(['about'], { wait: true })
)(PublicationsPage);
