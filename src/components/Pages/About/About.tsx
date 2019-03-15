import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { translate, TranslationFunction } from 'react-i18next';
import { Theme, Typography, createStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import Container from '../../../Container/Container';
import OurStack from '../../../OurStack/OurStack';
// import TeamCarousel from '../../Molecules/TeamCarousel/TeamCarousel';
import Section from '../../Molecules/Section/Section';
import { CustomButton } from '../../Atoms/CustomButton/CustomButton';
import { withStyles } from '@material-ui/core/styles';

interface IPropsInner {
  classes: any;
  t: TranslationFunction;
}

interface IPropsOuter {}

const styles = (theme: Theme) => createStyles({
  text: {
    color: 'white',
    "&& h2": {
      fontSize: "2rem",
      fontWeight: 500
    }
  },
  teamSection: {
    backgroundColor: grey[200]
  },
  siteSection: {
    backgroundColor: blue[900],
    color: grey[200]
  }
});

export const About: FC<IPropsInner> = ({ t, classes }) => {
  return (
    <>
      <Section scrollname={"attract"} className="py-5">
        <Container marginTopNavBar>
          <div className="row justify-content-center">
            <div className={`col-12 col-md-8 ${classes.text}`}>
              <Typography variant="h2" color="inherit" gutterBottom>{t('ABOUT_ATTRACT_TITLE')}</Typography>
              <Typography variant="body1" color="inherit" gutterBottom>
                {t('ABOUT_ATTRACT_TEXT')}
              </Typography>
            </div>
            <div className="col-12 col-md-8 col-sd-6">
              <OurStack />
            </div>
          </div>
          <div className="row justify-content-center py-3">
            {/*Already in love? Check out{' '}*/}
            <CustomButton
              className="mt-3"
              variant="contained"
              component={Link}
              to={'/jobs'}
              color="inherit"
            >
              {t('ABOUT_VACANCIES')}
            </CustomButton>
          </div>
        </Container>
      </Section>
      {/*<Section scrollname={"team"} className={`py-5 ${classes.teamSection}`} >
        <Container>
          <div className="row">
            <div className="col">
              <Typography variant="h4" align="center" className="mb-3">
                {t('ABOUT_TEAM_TITLE')}
              </Typography>
            </div>
          </div>
        </Container>
        <div className="row m-0">
          <TeamCarousel />
        </div>
      </Section>*/}
      <Section
        scrollname={"site"}
        className={`py-5 ${classes.siteSection}`}
      >
        <Container>
          <div className="row justify-content-center">
            <div className={`col-12 col-md-8 ${classes.text}`}>
              <Typography variant="h2" color="inherit" gutterBottom>
                {t('SITE_TITLE')}
              </Typography>
              <Typography variant="body1" color="inherit" gutterBottom>
                Bij Codestar werken we met veel plezier bij klanten, en
                daarnaast zorgen we er voor dat we elke vrijdag bij elkaar zijn
                om kennis uit te wisselen en contact te houden. In deze tijd
                werken we aan projecten, maar ook aan R&D. Op die manier is deze
                site ook ontstaan: als showcase voor de stack waar wij mee
                (willen) werken. We hebben hiervoor onder andere gebruik gemaakt
                van CRA, TypeScript, React, Storybook, CSS Modules, AWS Lamdba
                en Jest. En natuurlijk is het open source. Kijk in de{' '}
                <a href="https://github.com/code-star/codestar-website-react">
                  repo
                </a>{' '}
                voor meer details.
              </Typography>
            </div>
          </div>
        </Container>
      </Section>
      {/*<Section
        scrollname={"publications"}
        className="py-5"
      >
        <Container>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <Typography variant="h4" align="center" className="mb-3">
                {t('PUBLICATIONS_TITLE')}
              </Typography>
              <Typography variant="body1" className="mb-3">
                NYI
              </Typography>
            </div>
          </div>
        </Container>
      </Section>*/}
    </>
  );
};

export default compose<IPropsInner, IPropsOuter>(
  withStyles(styles),
  translate(['about'], { wait: true })
)(About);
