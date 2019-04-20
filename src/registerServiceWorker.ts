// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register(): Promise<ServiceWorkerRegistration | void> {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.origin);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return Promise.resolve();
    }

    return new Promise(resolve => {
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        if (isLocalhost) {
          // This is running on localhost. Lets check if a service worker still exists or not.
          const checkedServiceWorkerRegistration = checkValidServiceWorker(swUrl);

          // Add some additional logging to localhost, pointing developers to the
          // service worker/PWA documentation.
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://goo.gl/SC7cgQ'
            );
          });

          resolve(checkedServiceWorkerRegistration);
        } else {
          // Is not local host. Just register service worker
          resolve(registerValidSW(swUrl));
        }
      });
    })
  }
  return Promise.resolve();
}

type SendMessageFn = (_:string) => void;

export const onRegistration = (sendMessage:SendMessageFn) => (registration: ServiceWorkerRegistration | void) => {
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
            'New content is available, restart the tab to refresh';
          // alert(message)
          // this.setState({ message });
          sendMessage(message);
          // window.send_message_to_all_clients('Hello')
          // navigator.serviceWorker.controller.postMessage(message);
        } else {
          // At this point, everything has been precached.
          // It's the perfect time to display a
          // "Content is cached for offline use." message.
          console.log('Content is cached for offline use.');
          // alert('Parts of this site are available for offline use1.')
          const message = 'Parts of this site are available for offline use';
          // this.setState({
          //   message: 'Parts of this site are available for offline use.a',
          // });
          sendMessage(message);
        }
      }
    };
  };
};

// https://medium.com/progressive-web-apps/pwa-create-a-new-update-available-notification-using-service-workers-18be9168d717
function registerValidSW(swUrl: string): Promise<ServiceWorkerRegistration | void> {
  return navigator.serviceWorker
    .register(swUrl);
}

function checkValidServiceWorker(swUrl: string): Promise<ServiceWorkerRegistration | void> {
  // Check if the service worker can be found. If it can't reload the page.
  return fetch(swUrl)
    .then(response => {
      const {headers} = response;
      const contentType = headers && headers.get('content-type');
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        ( contentType && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
        return Promise.resolve();
      } else {
        // Service worker found. Proceed as normal.
        return registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
