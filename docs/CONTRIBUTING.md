# How to contribute to Codestar website

## Architecture

### Backend

The serverless functions are in a separate repo to streamline the inclusion of dependencies and to be able to set up CI/CD for the back-end.

The back-end must reflect our ambitions and workflow as well as our front-end is a showcase of how we work and how we want to work. Serverless fuctions in AWS Lambda's with Node are modern and scalable and fit the microservice architecture that is appropriate for the use case of calling a Twitter feed for example.

If we would implement a full scale back-end server, rather than running Node + Express, we would choose a Scala based solution to showcase the workflow of our Scala developers. This would probably be hosted on Heroku or whatever Cloud VPS we will commonly use at that time.

#### TODO

The serverless functions must be split into a separate repo to streamline the inclusion of dependencies and to be able to set up CI/CD for the back-end.

### Structural organization

Atomic design is used to structure the sources (see below). We allow 2 variants for structuring state.

1. The internal state variant. If a component does not retrieve data but has state, use `recompose.withStateHandlers`. Store the `initialState` and `stateUpdaters` in the component.
Export the base component and export the composed component as default.
An example would be "mouse over" state in `src/components/Atoms/EventsButton`

Note: the developer of recompose will not continue giving it support. React 16.7 (currently in RFC) will have hooks which are aimed to solve same issues recompose solves. When hooks are released, migrate from recompose to hooks.

2. The external state variant. If a component retrieves data externally, store the retrieving logic in `/src/containers/*`. An example is:

* `src/components/Molecules/NavBar/NavBar` (the stateless component)
* `src/containers/NavContainer` (adds state to NavBar through API call with Fetch)
* `src/App.jsx` (uses NavContainer)

This approach is described in more detail here: https://github.com/diegohaz/arc/wiki/Containers

In the mentioned variants, "retrieve data" can mean either calling an API with Fetch or accessing a data (Redux) store. We do not have a data store at the moment.

#### TODO

* `src/modules` should be renamed to `src/containers`
* `src/App.jsx` should be moved to `src/components/Environments`
* all components directly in `src` need to be moved to their appropriate paths


### Compilation

All component sources must use TypeScript and more specifically TSX.

Not yet decided: must the Storybook and Unit test sources be in TypeScript?

Currently we use a fork of create-react-app (https://github.com/code-star/create-react-app-typescript) that supports both TypeScript and CSS Modules. Recently create-react-app v2 has been released. We must either upgrade or eject.

#### TODO

* Decide if the Storybook and Unit test sources must be in TypeScript
* Decide how to continue with new versions of CRA

### CSS

We should use `SCSS modules` (i.e. Sass + CSS modules, effectively `file.module.scss`) everywhere. Using inline CSS or unscoped CSS imports (i.e. `import 'style.css'`) in React components is deprecated in this project and should be converted.

#### TODO
* Convert inline styles and unscoped CSS imports to SCSS modules
* The current workflow is implemented with `node-sass-chokidar`. This must be converted to directly load SCSS modules with webpack, and the dependencies and `scripts` section in package.json must be cleaned up
* Add `d.ts` for `scss`
* Research `css in js` (in R&D). Options:
  * `styled-components`
  * `emotion`
  * `glamorous`

### Styling

The design is based on Material Design.

We have to find a business value to be able to ask the budget to pay for a design.

We should use native `css grid` for grid. Currently `bootstrap-css-only` is (also) used, this must be replaced.

We use `material-ui` as a component library.

We should create a separate Components repository that implements minimal Codestar UI components from scratch based on Material Design.

#### TODO
* Upgrade to [material-ui](https://material-ui.com/) [v3](https://github.com/mui-org/material-ui/releases)
* Create Codestar UI

### CI/CD

* Travis CI is used to build and deploy. Commits on the `test` branch are automatically deployed to https://test.codestar.nl via the `master` branch. Commits on the `production` branch are automatically deployed to https://codestar.nl via the repo `code-star.github.io`
* No minimum test coverage is enforced. Write sensible unit tests.

## Building React UI Components following Atomic Design Principles

### Read the following if you have not already
* [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Atoms](http://bradfrost.com/blog/post/atomic-web-design/#atoms)
* [Molecules](http://bradfrost.com/blog/post/atomic-web-design/#molecules)
* [Organisms](http://bradfrost.com/blog/post/atomic-web-design/#organisms)
* [Templates](http://bradfrost.com/blog/post/atomic-web-design/#templates)
* [Pages](http://bradfrost.com/blog/post/atomic-web-design/#pages)

### Run Storybook component explorer for development using `start-storybook` npm script

### Run Jest for unit and snapshot tests using `test` or `test:watch` npm script

### Place React UI component under one of the following folders under an appropriate category

#### Atoms `src/components/Atoms`
Stateless components who do not rely on other (internal components);
* Button
* Heading
* Icon
* Label
* Link
* Input
* Paragraph

#### Molecules `src/components/Molecules`
Composition of Atoms;
* Form Field: using Atoms: Label, Input
* Search Form: using Atoms: Label, Input
* Introduction: using Atoms: Heading, Paragraph

#### Organisms `src/components/Organisms`
Groups of Molecules;
* Navigation: using Molecules: Buttons, Links
* Header: using Molecules: Navigation, Search Form, Toggle Button
* Footer: using Molecules: Heading, Paragraph, Links, Social Icons

#### Templates

#### Pages

#### Ecosystems
Composition of one or more Organisms.
The container component between the (Redux) store / fetching data and the Organism(s) relying on this data.

#### Environments

* Root components, like `<App />`  

### Build React UI component implementing the following:
* `index.ts`
  ```typescript
  import [AwesomeComponent] from './[AwesomeComponent]';

  export default [AwesomeComponent];
  ```

* `[AwesomeComponent].tsx`
  ```typescript
  import React from 'react';
  import classNames from 'classnames/bind';
  import style from './AwesomeComponent.module.css';

  const cx = classNames.bind(style);

  ...
  ```

* `[AwesomeComponent].module.scss`
  ```sass
  @import '[awesome relative path]/theming/config.module.scss';

  .awesome {

  }

  ```

* `[AwesomeComponent].stories.js`
  ```javascript
  import React from 'react';
  import { storiesOf } from '@storybook/react';
  import { withKnobs, select, text, number } from '@storybook/addon-knobs';
  import AwesomeComponent from './AwesomeComponent.tsx';

  ...
  ```

* `[AwesomeComponent].test.js`
  ```javascript
  import React from 'react';
  import { shallow, mount } from 'enzyme';

  import AwesomeComponent from './AwesomeComponent';

  ...
  ```
