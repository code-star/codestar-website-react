import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './codestarMuiTheme';
import ScrollToTop from './ScrollToTop';
import NavBar from './NavBar/NavBar';
import SideMenu from './SideMenu/SideMenu';
import Footer from './Footer/Footer';
import jobsList from './Jobs/JobsList';
import AsyncComponent from './AsyncComponent/AsyncComponent';
import { jsonp } from './util';

function fullHeightAsyncComponent(C) {
	return props => <AsyncComponent fullHeight component={() => C} {...props} />;
}

const AsyncIntro = fullHeightAsyncComponent(import('./Intro/Intro'));
const AsyncCases = fullHeightAsyncComponent(import('./Cases/Cases'));
const AsyncAbout = fullHeightAsyncComponent(import('./About/About'));
const AsyncJobs = fullHeightAsyncComponent(import('./Jobs/Jobs'));
const AsyncJobDescription = fullHeightAsyncComponent(
	import('./JobDescription/JobDescription')
);
const AsyncContact = fullHeightAsyncComponent(import('./Contact/Contact'));
const AsyncNotFound = fullHeightAsyncComponent(import('./NotFound/NotFound'));
const AsyncEvents = fullHeightAsyncComponent(import('./Events/Events'));

const sections = ['', 'cases', 'about', 'jobs', 'contact'];

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
// page=3 = number of results to return in a page, only need the first 3 results
const GET_UPCOMING_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?photo-host=secure&page=3&sig_id=226887185&status=upcoming&sig=e3efc6db037cf681181d84ae343459a36afbefd4';

class App extends Component {
	state = {
		drawerMenu: false,
		nextEvent: null,
	};

	constructor(props) {
		super(props);
		this.classes = props.classes;
		this.history = createHistory({ basename: process.env.PUBLIC_URL });

		this.history.listen(location =>
			this.updateBackgroundColor(location.pathname)
		);
		this.updateBackgroundColor(this.history.location.pathname);
	}

	componentDidMount() {
		this.fetchUpcomingEvent.call(this);
	}

	fetchUpcomingEvent() {
		/* Meetup API only allows JSONP for client-side, non authenticated, api key signed GET requests.
		   must use JSONP conform https://github.com/meetup/api/issues/211
		   Fetch API does not support JSONP. no-cors mode creates an opaque response without data.
		*/
		jsonp(GET_UPCOMING_EVENTS_URL).then(data => {
			const nextEvent = data.data[0];
			if (nextEvent) {
				this.setState({ nextEvent });
			}
		});
	}

	updateBackgroundColor(pathname) {
		const section = pathname.split('/')[1];
		const index = sections.indexOf(section);
		const position = -(index >= 0 ? index : 0) * 100;
		document.body.style.backgroundPositionY = `${position}vh, 0`;
	}

	toggleDrawer = () => {
		this.setState(prevState => {
			return {
				drawerMenu: !prevState.drawerMenu,
			};
		});
	};

	render() {
		return (
			<Router history={this.history}>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<NavBar toggle={this.toggleDrawer} nextEvent={this.state.nextEvent} />
					<SideMenu
						open={this.state.drawerMenu}
						toggle={this.toggleDrawer}
						history={this.history}
						nextEvent={this.state.nextEvent}
					/>

					<ScrollToTop>
						<Switch>
							<Route exact path="/" component={AsyncIntro} />
							<Route exact path="/cases" component={AsyncCases} />

							<Route exact path="/jobs" component={AsyncJobs} />
							{jobsList.map(job => (
								<Route
									exact
									path={`/jobs/${job.path}`}
									key={job.path}
									render={() => <AsyncJobDescription {...job} />}
								/>
							))}

							<Route path="/about" component={AsyncAbout} />
							<Route path="/contact" component={AsyncContact} />
							<Route path="/events" component={AsyncEvents} />
							<Route path="/404" component={AsyncNotFound} />
							<Redirect to="/404" />
						</Switch>
					</ScrollToTop>

					<Footer />
				</MuiThemeProvider>
			</Router>
		);
	}
}

export default App;
