import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './codestarMuiTheme';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer/Footer';
import jobsList from './Jobs/JobsList';
import AsyncComponent from './AsyncComponent/AsyncComponent';
import NavContainer from './containers/NavContainer/NavContainer';

function fullHeightAsyncComponent(C) {
  return props => <AsyncComponent fullHeight component={() => C} {...props} />;
}

const AsyncIntro = fullHeightAsyncComponent(import('./Intro/Intro'));
const AsyncCases = fullHeightAsyncComponent(import('./Cases/Cases'));
const AsyncAbout = fullHeightAsyncComponent(
  import('./components/Pages/About/About')
);
const AsyncJobs = fullHeightAsyncComponent(import('./Jobs/Jobs'));
const AsyncJobDescription = fullHeightAsyncComponent(
  import('./JobDescription/JobDescription')
);
const AsyncContact = fullHeightAsyncComponent(import('./Contact/Contact'));
const AsyncCodeChallange = fullHeightAsyncComponent(import('./components/Pages/CodeChallenge/CodeChallenge'));
const AsyncNotFound = fullHeightAsyncComponent(import('./NotFound/NotFound'));
const AsyncEvents = fullHeightAsyncComponent(
  import('./containers/EventsContainer/EventsContainer')
);

const sections = ['', 'cases', 'about', 'jobs', 'contact'];

class App extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.history = createHistory({ basename: process.env.PUBLIC_URL });

    this.history.listen(location =>
      this.updateBackgroundColor(location.pathname)
    );
    this.updateBackgroundColor(this.history.location.pathname);
  }

  updateBackgroundColor(pathname) {
    const section = pathname.split('/')[1];
    const index = sections.indexOf(section);
    const position = -(index >= 0 ? index : 0) * 100;
    document.body.style.backgroundPositionY = `${position}vh, 0`;
  }

  render() {
    return (
      <Router history={this.history}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <NavContainer history={this.history} />

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
              <Route path="/code-challenge" component={AsyncCodeChallange} />
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
