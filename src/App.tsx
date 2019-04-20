import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
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
import registerServiceWorker from './registerServiceWorker';

function fullHeightAsyncComponent<Props>(component: ComponentTypePromise) {
  return (props: Props) => (
    <AsyncComponent fullHeight component={() => component} {...props} />
  );
}

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

const sections = ['', 'cases', 'about', 'jobs', 'contact'];

type AppProps = Readonly<{}>;
type AppState = Readonly<{
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
      message: null,
    };

    // TODO show Snackbar
    // TODO unit test
    // TODO convert to different kind of setState? see `private history: History`
    // TODO move body of `then` to util with callbacks?

    const serviceWorkerRegistration: Promise<ServiceWorkerRegistration | void> = registerServiceWorker();
    serviceWorkerRegistration
      .then((registration: ServiceWorkerRegistration | void) => {
        if (!registration) {
          return;
        }
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (!installingWorker) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged and
                // the fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in your web app.
                // console.log(self.clients)
                console.log('New content is available; please refresh.');
                // this works: document.location.href = document.location.href + "?foo"
                const message =
                  'New content is available, restart the tab to refresh.6ab';
                // alert(message)
                this.setState({ message });
                // window.send_message_to_all_clients('Hello')
                // navigator.serviceWorker.controller.postMessage(message);
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a
                // "Content is cached for offline use." message.
                console.log('Content is cached for offline use.');
                // alert('Parts of this site are available for offline use1.')
                this.setState({
                  message: 'Parts of this site are available for offline use.a',
                });
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }

  public render() {
    return (
      <Router history={this.history}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />

          <h1 style={{ marginTop: '140px', color: 'white' }}>
            test {this.state.message}
          </h1>

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

  private updateBackgroundColor(pathname: string) {
    const section = pathname.split('/')[1];
    const index = sections.indexOf(section);
    const position = -(index >= 0 ? index : 0) * 100;
    document.body.style.backgroundPositionY = `${position}vh, 0`;
  }
}

export default App;
