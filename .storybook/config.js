import { configure } from '@storybook/react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: `CodeStar`,
  url: 'https://github.com/code-star/codestar-website-react',
  showAddonPanel: true,
  addonPanelInRight: false
});

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
