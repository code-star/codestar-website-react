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
	const comp = renderer.create(
		<InlineLogo>
			<div>test Codestar test</div>
		</InlineLogo>
	);
	const compInstance = comp.getInstance();
	const domResult = compInstance.render()[0].props.children;
	expect(domResult[0]).toBe('test ');
	// This is probably the easiest way to do duck-typing of the image that is injected instead of the string Codestar.
	// It checks if the object that is injected has a "type" property that is a function.
	expect(typeof domResult[1].type).toBe('function');
	expect(domResult[2]).toBe(' test');
});

it('leaves string without Codestar unchanged', () => {
	const comp = renderer.create(
		<InlineLogo>
			<div>test test</div>
		</InlineLogo>
	);
	const compInstance = comp.getInstance();
	const domResult = compInstance.render()[0].props.children;
	expect(domResult[0]).toBe('test test');
});
