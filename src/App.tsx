import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { History } from 'history';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './codestarMuiTheme';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer/Footer';
import jobsList from './Jobs/JobsList';
import AsyncComponent, {
  ComponentTypePromise,
} from './AsyncComponent/AsyncComponent';
import NavContainer from './containers/NavContainer/NavContainer';
import { JobDescriptionOuterProps } from './JobDescription/JobDescription';
import registerServiceWorker, { onRegistration } from './registerServiceWorker';
import AppMessageSnackbar from './components/Molecules/AppMessageSnackbar/AppMessageSnackbar';

function fullHeightAsyncComponent<Props>(component: ComponentTypePromise) {
  return (props: Props) => (
    <AsyncComponent fullHeight component={() => component} {...props} />
  );
}

// TODO replace AsyncComponent with Lazy https://medium.freecodecamp.org/how-to-use-react-lazy-and-suspense-for-components-lazy-loading-8d420ecac58
const AsyncIntro = fullHeightAsyncComponent(import('./Intro/Intro'));
const AsyncCases = fullHeightAsyncComponent(import('./Cases/Cases'));
const AsyncAbout = fullHeightAsyncComponent(
  import('./components/Pages/About/About')
);
const AsyncJobs = fullHeightAsyncComponent(import('./Jobs/Jobs'));
const AsyncJobDescription = fullHeightAsyncComponent<JobDescriptionOuterProps>(
  import('./JobDescription/JobDescription')
);
const AsyncContact = fullHeightAsyncComponent(import('./Contact/Contact'));
const AsyncCodeChallenge = fullHeightAsyncComponent(
  import('./components/Pages/CodeChallenge/CodeChallenge')
);
const AsyncNotFound = fullHeightAsyncComponent(import('./NotFound/NotFound'));
const AsyncEvents = fullHeightAsyncComponent(
  import('./containers/EventsContainer/EventsContainer')
);
const AsyncPublications = fullHeightAsyncComponent(
  import('./components/Pages/Publications/Publications')
);

// Darkest -> lightest background
const pages = ['', 'events', 'cases', 'about', 'jobs', 'contact', 'publications'];

type AppProps = Readonly<{}>;
type AppState = Readonly<{
  showMessage: boolean;
  message: string | null;
}>;

class App extends Component<AppProps, AppState> {
  private history: History;

  constructor(props: AppProps) {
    super(props);
    this.history = createHistory({ basename: process.env.PUBLIC_URL });

    this.history.listen(location =>
      this.updateBackgroundColor(location.pathname)
    );
    this.updateBackgroundColor(this.history.location.pathname);

    this.state = {
      showMessage: false,
      message: null,
    };

    const serviceWorkerRegistration: Promise<ServiceWorkerRegistration | void> = registerServiceWorker();
    serviceWorkerRegistration
      .then(
        onRegistration(message => {
          this.setState({
            showMessage: true,
            message,
          });
        })
      )
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }

  handleCloseSnackbar = () => {
    this.setState({ showMessage: false });
  };

  handleExitedSnackbar = () => {
    this.setState({ message: null });
  };

  public render() {
    return (
      <Router history={this.history}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />

          <AppMessageSnackbar
            showMessage={this.state.showMessage}
            message={this.state.message}
            handleCloseSnackbar={this.handleCloseSnackbar}
            handleExitedSnackbar={this.handleExitedSnackbar}
          />

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
              <Route path="/publications" component={AsyncPublications} />
              <Route path="/code-challenge" component={AsyncCodeChallenge} />
              <Route path="/404" component={AsyncNotFound} />
              <Redirect to="/404" />
            </Switch>
          </ScrollToTop>

          <Footer />
        </MuiThemeProvider>
      </Router>
    );
  }

  // TODO automatically determine all pages & order from Route, do not use document.body.style side-effect
  private updateBackgroundColor(pathname: string) {
    const page = pathname.split('/')[1];
    const index = pages.indexOf(page);
    const position = -(index >= 0 ? index : 0) * 100;
    document.body.style.backgroundPositionY = `${position}vh, 0`;
  }
}

export default App;
