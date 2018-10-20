import * as React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { Button, Typography } from '@material-ui/core';
import Container from '../../../Container/Container';
import OurStack from '../../../OurStack/OurStack';
import TeamCarousel from '../../Molecules/TeamCarousel/TeamCarousel';
import styles from './About.module.scss';

type AboutProps = any;

// Fixme: this is a workaround for using the material ui button
// with the `to` property. By default this is not supported.
const CustomButton = (props: any) => <Button {...props} />;

class About extends React.Component<AboutProps> {
  public render() {
    const { t } = this.props;
    return (
      <div>
        <section className="py-5">
          <Container marginTopNavBar>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                <h3 className={styles.whiteText}>{t('ABOUT_ATTRACT_TITLE')}</h3>
                <p className={[styles.whiteText, styles.conduit].join(' ')}>
                  {t('ABOUT_ATTRACT_TEXT')}
                </p>
              </div>
              <div className="col-12 col-md-8 col-sd-6">
                <OurStack />
              </div>
            </div>
            <div className="row justify-content-center py-3">
              {/*Already in love? Check out{' '}*/}
              <CustomButton
                className="mt-3"
                variant="raised"
                component={Link}
                to={'/jobs'}
                color="inherit"
              >
                {t('ABOUT_VACANCIES')}
              </CustomButton>
            </div>
          </Container>
        </section>
        <section className="py-5" style={{ background: '#eeeeee' }}>
          <Container>
            <div className="row">
              <div className="col">
                <Typography variant="display1" align="center" className="mb-3">
                  {t('ABOUT_TEAM_TITLE')}
                </Typography>
              </div>
            </div>
          </Container>
          <div className="row m-0">
            <TeamCarousel />
          </div>
        </section>
      </div>
    );
  }
}

export default translate(['about'], { wait: true })(About);
