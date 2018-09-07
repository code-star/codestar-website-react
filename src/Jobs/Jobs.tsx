import * as React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import InlineLogo from '../InlineLogo/InlineLogo';
import Container from '../Container/Container';
import OurStack from '../OurStack/OurStack';
import Clients from '../Clients/Clients';
import jobsList from './JobsList';
import JobCard from './JobCard';

type JobsProps = any;

const styles = {
  whiteText: {
    color: 'white',
  },
  conduit: {
    fontFamily: 'Conduit',
    fontSize: '120%',
  },
};

// Fixme: this is a workaround for using the material ui button
// with the `to` property. By default this is not supported.
const CustomButton = (props: any) => <Button {...props} />;

class Jobs extends React.Component<JobsProps> {
  public render() {
    const { t, classes } = this.props;

    return (
      <>
        <section className="py-3">
          <Container marginTopNavBar>
            <div className="row">
              <div className="col-12 col-lg-8 mt-2 mt-4">
                <h3 className={classes.whiteText}>{t('JOBS_VACANCIES')}</h3>
                <p className={`${classes.whiteText} ${classes.conduit}`}>
                  <InlineLogo dark small>
                    {t('JOBS_VACANCIES_TEXT')}
                  </InlineLogo>
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="d-flex justify-content-center flex-wrap">
                {jobsList.map(job => (
                  <JobCard key={job.path} {...job} />
                ))}
              </div>
            </div>
          </Container>
        </section>
        <section className="pb-3 pt-5" style={{ backgroundColor: '#eeeeee' }}>
          <Container>
            <Typography variant="display1" className="mt-3">
              <InlineLogo>Working at Codestar</InlineLogo>
            </Typography>
            <div className="row">
              <div className="col-12 col-md-6 mt-5">
                <h3>{t('JOBS_TITLE')}</h3>
                <ul>
                  {t('JOBS_ARGUMENTS', { returnObjects: true }).map(
                    (arg: any, i: number) => (
                      <li key={i}>{arg}</li>
                    )
                  )}
                </ul>
              </div>
              <div className="col-12 col-md-6 mt-5">
                <h3 className="mb-3">{t('JOBS_BEST_TECH')}</h3>
                <OurStack />
              </div>
              <div className="col-12 mt-5">
                <h3>{t('JOBS_BEST_CLIENTS')}</h3>
                <Link to="/cases">
                  <Clients title="Companies that trust on us" />
                </Link>
              </div>
            </div>
            <div className="row justify-content-center py-3">
              <p>
                <CustomButton
                  className="mt-3"
                  variant="raised"
                  component={Link}
                  to="/about"
                  color="inherit"
                >
                  {t('JOBS_ABOUT_US')}
                </CustomButton>
              </p>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default translate(['jobs'], { wait: true })(withStyles(styles)(Jobs));
