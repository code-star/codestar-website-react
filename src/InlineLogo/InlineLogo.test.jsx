import React from 'react';
import ReactDOM from 'react-dom';
import InlineLogo from './InlineLogo';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <InlineLogo>
      <div>test</div>
    </InlineLogo>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('replaces Codestar in a string with an image', () => {
  const comp = renderer
    .create(
      <InlineLogo>
        <div>test Codestar test</div>
      </InlineLogo>
    )
    .toJSON();
  expect(comp).toMatchSnapshot();
});

it('leaves string without Codestar unchanged', () => {
  const comp = renderer
    .create(
      <InlineLogo>
        <div>test test</div>
      </InlineLogo>
    )
    .toJSON();
  expect(comp).toMatchSnapshot();
});
