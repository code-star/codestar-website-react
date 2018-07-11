import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'material-ui';
import { translate } from 'react-i18next';
import { withStyles } from 'material-ui/styles';

import Container from '../Container/Container';
import OurStack from '../OurStack/OurStack';
import Clients from '../Clients/Clients';
import jobsList from './JobsList';
import JobCard from './JobCard';

const styles = {
	whiteText: {
		color: 'white',
	},
	conduit: {
		fontFamily: 'Conduit',
		fontSize: '120%',
	},
};

@translate(['jobs'], { wait: true })
class Jobs extends Component {
	render() {
		const { t, classes } = this.props;
		return (
			<Fragment>
				<section className="py-3">
					<Container marginTopNavBar>
						<div className="row">
							<div className="col-12 mt-2 mb-4">
								<h3 className={classes.whiteText}>{t('JOBS_VACANCIES')}</h3>
								<div className="d-flex justify-content-center flex-wrap">
									{jobsList.map(job => (
										<JobCard
											translation={job.translation}
											image={job.image}
											path={job.path}
										/>
									))}
								</div>
							</div>
						</div>
					</Container>
				</section>
				<section className="pb-3 pt-5" style={{ backgroundColor: '#eeeeee' }}>
					<Container>
						<div className="row mb-5">
							<div className="col-12 col-md-6 align-self-center">
								<h3>{t('JOBS_TITLE')}</h3>
								<ul>
									{t('JOBS_ARGUMENTS', { returnObjects: true }).map(
										(arg, i) => <li key={i}>{arg}</li>
									)}
								</ul>
							</div>
							<div className="col-12 col-md-6">
								<h3 className="mb-3">{t('JOBS_BEST_TECH')}</h3>
								<OurStack />
							</div>
							<div className="col-12 mt-3">
								<h3>{t('JOBS_BEST_CLIENTS')}</h3>
								<Clients title="Companies that trust on us" />
							</div>
						</div>
						<div className="row justify-content-center my-3">
							<p>
								Not sure yet? Know more{' '}
								<Button
									variant="raised"
									component={Link}
									to="/about"
									color="inherit"
								>
									About Us
								</Button>
							</p>
						</div>
					</Container>
				</section>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Jobs);
