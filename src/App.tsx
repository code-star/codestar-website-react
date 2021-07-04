import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { History } from 'history';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './codestarMuiTheme';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer/Footer';
// import jobsList from './Jobs/JobsList';
import NavContainer from './containers/NavContainer/NavContainer';
// import registerServiceWorker, { onRegistration } from './registerServiceWorker';
import AppMessageSnackbar from './components/Molecules/AppMessageSnackbar/AppMessageSnackbar';
import LoadingMessage from './components/Atoms/LoadingMessage/LoadingMessage';
import FullHeight from './components/Atoms/FullHeight/FullHeight';

// const AsyncIntro = lazy(() => import('./Intro/Intro'));
// const AsyncCases = lazy(() => import('./Cases/Cases'));
// const AsyncAbout = lazy(() => import('./components/Pages/About/About'));
// const AsyncJobs = lazy(() => import('./Jobs/Jobs'));
// FIXME any type, lazy<JobDescriptionOuterProps> is invalid
// const AsyncJobDescription = lazy<any>(() =>
//   import('./JobDescription/JobDescription')
// );
// const AsyncContact = lazy(() => import('./Contact/Contact'));
const AsyncCodeChallenge = lazy(() =>
  import('./components/Pages/CodeChallenge/CodeChallenge')
);
const AsyncNotFound = lazy(() => import('./NotFound/NotFound'));
const AsyncEvents = lazy(() =>
  import('./containers/EventsContainer/EventsContainer')
);
const AsyncPublications = lazy(() =>
  import('./components/Pages/Publications/Publications')
);

// Darkest -> lightest background
const pages = [
  '',
  'publications',
  'events',
  'codelancer',
  // 'cases',
  // 'about',
  // 'jobs',
  // 'contact',
];

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

    // The serviceworker seems to conflict with subdomains like https://code-star.github.io/nx-reference/ 
    // That URL would always be redirected to the 404 page.
//     const serviceWorkerRegistration: Promise<ServiceWorkerRegistration | void> = registerServiceWorker();
//     serviceWorkerRegistration
//       .then(
//         onRegistration(message => {
//           this.setState({
//             showMessage: true,
//             message,
//           });
//         })
//       )
//       .catch(error => {
//         console.error('Error during service worker registration:', error);
//       });
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

          <FullHeight>
            <ScrollToTop>
              <Suspense fallback={<LoadingMessage />}>
                <Switch>
                  <Route exact path="/">
                    <AsyncPublications />
                  </Route>
                  <Route path="/events">
                    <AsyncEvents />
                  </Route>
                  <Route path="/codelancer">
                    <AsyncCodeChallenge />
                  </Route>
                  <Route path="/notfound">
                    <AsyncNotFound />
                  </Route>
                  <Redirect to="/notfound" />
                </Switch>
              </Suspense>
            </ScrollToTop>
          </FullHeight>
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
