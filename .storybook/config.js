import { configure, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'
import 'bootstrap-css-only/css/bootstrap.min.css';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'CodeStar',
      brandUrl: 'https://github.com/code-star/codestar-website-react',
    }),
    isFullscreen: false,
    showNav: true,
    showPanel: false,
    sidebarAnimations: false,
  },
})

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
