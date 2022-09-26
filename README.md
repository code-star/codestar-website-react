[![Build Status](https://travis-ci.org/code-star/codestar-website-react.svg?branch=develop)](https://travis-ci.org/code-star/codestar-website-react)

<img align=center src=https://cloud.githubusercontent.com/assets/4116708/12473911/e67fdd44-c016-11e5-9c21-5714e07549fe.png width=450 />

*Passionate programmers standing to make a change*

---
# Codestar website

Note: uses custom fork of [react-scripts-ts](https://github.com/code-star/create-react-app-typescript) to
use CSS Modules without ejecting.

**Contents:**

1. [Developing](#developing)
1. [Deploying](#deploying)
1. [Hosting config](#hosting-config)
1. [Serverless](#serverless)
	- [Configuration](#configuration)
	- [Calling the function](#calling-the-function)
1. [Hosting pictures](#hosting-pictures)
	- [Notes](#notes)
1. [Local API](#local-api)
1. [Unit testing](#unit-testing)
1. [Available Scripts](#available-scripts)
1. [Contributing](#contributing)
1. [Add a team member](#add-a-team-member)
1. [Available Lambda Functions](#available-lambda-functions)

Other docs:

- [Implementation of the 	animations](docs/animations.md)
- [Details on some components](docs/components.md)
- [Easter eggs](docs/easter_eggs.md)

## Developing

We use `npm` over `yarn`. Do not check-in a yarn.lock file. The expected npm version can be found in `.nvmrc`.
Run `npm start`, which will run `REACT_APP_STAGE=dev react-scripts start`. It is important that `REACT_APP_STAGE` is set to `dev`, because that switches the API calls to the local mock URLs. Otherwise, it will run with the production URLs.

## Deploying

Deployments are handled by Github Actions.

Triggering a deployment is done by committing/merging to the:

- `test` branch for the test site: https://code-star.github.io/codestar-website-react
- `production` branch for the production site: https://code-star.github.io

## Hosting config

Only allow https (better SEO, encrypted form data), so set up Cloudflare to use Force HTTPS and HSTS. In Cloudflare go to the "Crypto" tab. Scroll down to "Always use HTTPS" and change the toggle to "on".

**NOTE** turning on HSTS is difficult to revert, so discuss in the team first. Below that there is the option "HTTP Strict Transport Security (HSTS)". Click "Enable HSTS".

**NOTE** If you need to disable HTTPS on your domain, you must first disable HSTS in your Cloudflare dashboard and wait for the max-age to lapse to guarantee that every browser is aware of this change before you can disable HTTPS.

## Serverless

See the repo [codestar-website-functions](https://github.com/code-star/codestar-website-functions)

## Hosting pictures

We should use Cloudinary as much as possible for hosting images. The [`ResponsiveImage.jsx` file](src/ResponsiveImage/ResponsiveImage.jsx) contains utilities for doing so:

- `<ResponsiveImage>` provides a `srcset` containing multiple versions of the specified picture with multiple widths hosted on Cloudinary
- `responsiveImageProps()` returns the necessary props for components like `<img>` or `<Avatar>` with the same properties as a `<ResponsiveImage>`
- `getResponsiveImageUrl()` returns the Cloudinary URL for a specific image and width

### Notes

- The folder structure in `/public` should be replicated on Cloudinary, in the root `/codestar.nl`: for instance, `/public/images/codestar_logo_dark.svg` should be hosted in `/codestar.nl/images/codestar_logo_dark.svg`
- For images used in components with a fixed size, also request a fixed size from Cloudinary (keep Retina displays in mind, get 2x the size needed)
- Cloudinary is versioned, so when replacing an already existing image, the change will only be visible if the version number in the URL is changed:

  ```
  http://res.cloudinary.com/codestar/image/upload/v1532077524/codestar.nl/images/codestar_logo_dark.svg
  ```

  Otherwise, the image before the replacing will be shown. To change the version number, edit the [`.env` file](.env):

  ```
  REACT_APP_CLOUDINARY_ID=v1532588516
  ```

## Local API

* Static Site Mailer: see above
* Get Upcoming Events from Meetup.com: `DEBUG=true npx sls invoke local --function getUpcomingEvents --path serverless/staticSiteMailer-dummy-payload.json`
* Get Past Events from Meetup.com: `npx sls invoke local --function getPastEvents --path serverless/staticSiteMailer-dummy-payload.json`

## Unit testing

* Run `npm test`
* Run one specific test: e.g. `npm test -- src/modules/EventsContainer/EventsContainer.test.jsx --coverage=false --watch`
* To only run one test in a file use `fit()` instead of `it()`, to exclude use `xit()` instead of `it()`

## Available Scripts

- `npm start`
Runs the app in the development mode executing `npm-run-all -p watch-css start-ts` scripts<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run build`
Builds the app for production to the `build` folder executing `npm-run-all build-css build-ts`.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

- `npm run build-ts`
Builds react app executing `react-scripts-ts test --env=jsdom --coverage --bail --ci && react-scripts-ts build`

- `npm run start-ts`
Starts react app executing `REACT_APP_STAGE=dev react-scripts-ts start`

- `npm run build-css`
Compiles CSS into SASS executing `node-sass-chokidar src/ -o src/`

- `npm run watch-css`
Compiles Sass into CSS and watches styling changes executing `npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive`

- `npm run start-storybook`
Runs Storybook<br>
Runs Storybook and shows all available components and their stories.
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

- `npm run build-storybook`
Exports Storybook as a static app to `storybook-static` folder.<br>

- `npm test`
Launches test runner executing `react-scripts-ts test --env=jsdom --coverage`.

- `test:watchAll:silent`
Launches test runner watching all files exposing some details executing `react-scripts-ts test --env=jsdom --watchAll --silent --verbose`.

- `test:watchAll:loud`
Launches test runner watching all files exposing all details executing `react-scripts-ts test --env=jsdom --watchAll  --verbose`.

- `test:watchChanged:silent`
Launches test runner watching changed files exposing some details executing `react-scripts-ts test --env=jsdom --watch --onlyChanged --silent --verbose`.

- `test:watchChanged:loud`
Launches test runner watching changed files exposing all details executing `react-scripts-ts test --env=jsdom --watch --onlyChanged  --verbose`.

- `npm run eject`
Ejects `create-react-app` and exposes `react-scripts` executing `react-scripts-ts eject`.

## Contributing

You can find information about contributing in our [guideline for repository contributors](https://github.com/code-star/codestar-website-react/blob/test/docs/CONTRIBUTING.md)

## Add a Team Member

- Create a new feature branch from the `test` branch
- Prepare a photo. However, all images are hosted on Cloudinary. Cloudinary does not allow shared accounts, so ask for it to be added in #website on Slack
- Add an entry to `./src/components/Molecules/TeamCarousel/Team.json`
- Create a MR from the feature branch to the `test` branch
- Request a review of the MR in #website on Slack

## Available Lambda Functions

You can find information about available Lambda functions here:
- [getRecentTweets](https://github.com/code-star/codestar-website-react/blob/test/docs/getRecentTweets.md)
