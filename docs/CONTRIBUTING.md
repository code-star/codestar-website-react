# How to contribute to Codestar website

## Architecture

### Backend

The serverless functions must be split into a separate repo to streamline the inclusion of dependencies and to be able to set up CI/CD for the back-end.

Not yet decided:

* to build a back-end a traditional Node + Express server on e.g. Heroku
* to build a back-end in Scala

### Structural organization

Currently we have multiple ways to structure the sources.

* Some components exist directly in the root of `src`, e.g. `src/Intro`
* Some components follow the presentational + container pattern, e.g. `src/NavBar` (which should have been in `src/components/NavBar`) + `src/modules/NavContainer`
* Some follow Atomic design (see below for details): `src/components/Atoms`, `src/components/Molecules` etc.

This must be consolidated to a single way of organizing the structure. If Atomic Design is elected, we need to decide what the correct place is for the container components.

#### TODO

* decide on structure
* refactor

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

* **Read the following if you have not already**
  * [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
  * [Atoms](http://bradfrost.com/blog/post/atomic-web-design/#atoms)
  * [Molecules](http://bradfrost.com/blog/post/atomic-web-design/#molecules)
  * [Organisms](http://bradfrost.com/blog/post/atomic-web-design/#organisms)
  * [Templates](http://bradfrost.com/blog/post/atomic-web-design/#templates)
  * [Pages](http://bradfrost.com/blog/post/atomic-web-design/#pages)

* **Run Storybook component explorer for development using `start-storybook` npm script**

* **Run Jest for unit and snapshot tests using `test` or `test:watch` npm script**

* **Place React UI component under one of the following folders under an appropriate category**
  * Atoms: `src/components/Atoms`
  * Molecules: `src/components/Molecules`
  * Organisms: `src/components/Organisms`
  * Templates: `src/components/Templates`
  * Pages: `src/components/Pages`

* **Build React UI component implementing the following:**
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
