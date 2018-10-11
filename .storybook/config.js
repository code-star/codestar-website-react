import { configure } from '@storybook/react';
import 'bootstrap-css-only/css/bootstrap.min.css';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
