import React, { Component } from 'react';
import { translate } from 'react-i18next';
import AsyncComponent from './AsyncComponent/AsyncComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import CssBaseline from 'material-ui/CssBaseline';

import NavBar from './NavBar/NavBar';
import SideMenu from './SideMenu/SideMenu';
import Footer from './Footer/Footer';

import casesList from './Cases/CasesList';

const AsyncIntro = AsyncComponent(() => import('./Intro/Intro'));
const AsyncCases = AsyncComponent(() => import('./Cases/Cases'));
const AsyncCaseDetails = AsyncComponent(() =>
	import('./CaseDetails/CaseDetails')
);
const AsyncAbout = AsyncComponent(() => import('./About/About'));
const AsyncJobs = AsyncComponent(() => import('./Jobs/Jobs'));
const AsyncContact = AsyncComponent(() => import('./Contact/Contact'));

@translate(['translations', 'nav'], { wait: true })
class App extends Component {
	state = {
		drawerMenu: false,
	};

	constructor(props) {
		super();
		this.classes = props.classes;
	}

	toggleDrawer = () => {
		this.setState(prevState => {
			return {
				drawerMenu: !prevState.drawerMenu,
			};
		});
	};

	render() {
		// const { t } = this.props;
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div>
					<CssBaseline />
					<NavBar toggle={this.toggleDrawer} />
					<SideMenu open={this.state.drawerMenu} toggle={this.toggleDrawer} />

					<ScrollToTop>
						<Route exact path="/" component={AsyncIntro} />
						<Route exact path="/cases" component={AsyncCases} />

						{casesList.map(clientCase => (
							<Route
								exact
								path={`/cases/${clientCase.path}`}
								key={clientCase.client}
								render={() => <AsyncCaseDetails {...clientCase} />}
							/>
						))}

						<Route path="/about" component={AsyncAbout} />
						<Route path="/jobs" component={AsyncJobs} />
						<Route path="/contact" component={AsyncContact} />
					</ScrollToTop>

					{/*<div>*/}
					{/*{t('APP_NAME')} /!*TODO REMOVE*!/*/}
					{/*</div>*/}

					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
