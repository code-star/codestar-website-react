# How to contribute to Codestar website

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
