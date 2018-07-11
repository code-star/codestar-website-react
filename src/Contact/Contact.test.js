import React from 'react';
import ReactDOM from 'react-dom';
import { Contact } from './Contact';
import renderer from 'react-test-renderer';

jest.mock('react-i18next', () => ({
	translate: () => Component => {
		Component.defaultProps = { ...Component.defaultProps, t: () => '' };
		return Component;
	},
}));

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Contact />, div);
	ReactDOM.unmountComponentAtNode(div);
});

describe('An instance of Contact', () => {
	let compInstance;

	beforeAll(() => {
		const comp = renderer.create(<Contact />);
		compInstance = comp.getInstance();
	});

	it('should have an initial state with all empty fields', () => {
		const comp = renderer.create(<Contact />);
		expect(comp.getInstance().state).toEqual({
			name: '',
			phone: '',
			email: '',
			message: '',
			messageRequiredError: false,
		});
	});

	it('modifies the state on handleChange', () => {
		compInstance.handleChange({
			target: { name: 'name', value: 'MY_TEST_NAME' },
		});
		expect(compInstance.state).toEqual({
			name: 'MY_TEST_NAME',
			phone: '',
			email: '',
			message: '',
			messageRequiredError: false,
		});
	});

	it('calls preventDefault on handleSubmit, error to be set if no message filled in', () => {
		const ev = {
			preventDefault: jest.fn(),
		};
		compInstance.handleSubmit(ev);
		expect(ev.preventDefault).toHaveBeenCalled();
		expect(compInstance.state.messageRequiredError).toBeTruthy();
	});

	it('calls preventDefault on handleSubmit, error to be unset, submit to be called if message is filled in', () => {
		const ev = {
			preventDefault: jest.fn(),
			target: {
				submit: jest.fn(),
			},
		};
		compInstance.handleChange({
			target: { name: 'message', value: 'MY_TEST_MESSAGE' },
		});
		compInstance.handleSubmit(ev);
		expect(ev.preventDefault).toHaveBeenCalled();
		expect(ev.target.submit).toHaveBeenCalled();
		expect(compInstance.state.messageRequiredError).toBeFalsy();
	});
});
