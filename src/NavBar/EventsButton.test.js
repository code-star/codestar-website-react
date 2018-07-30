import React from 'react';
import ReactDOM from 'react-dom';
import { EventsButton } from './EventsButton';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-i18next', () => ({
	translate: () => Component => {
		Component.defaultProps = { ...Component.defaultProps, t: () => '' };
		return Component;
	},
}));

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<MemoryRouter>
			<EventsButton label="TEST_EVENTS_LABEL" classes={{ newEventIcon: '' }} />
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});

describe('An instance of Contact', () => {
	let compInstance;

	beforeAll(() => {
		const testRenderer = renderer.create(
			<MemoryRouter>
				<EventsButton
					label="TEST_EVENTS_LABEL"
					classes={{ newEventIcon: '' }}
				/>
			</MemoryRouter>
		);
		const testInstance = testRenderer.root;
		compInstance = testInstance.findByType(EventsButton).instance;
	});

	it('sets hover state', () => {
		expect(compInstance.state).toEqual({
			isHovering: false,
			nextEvent: '',
		});
		compInstance.handleMouseOver();
		expect(compInstance.state).toEqual({
			isHovering: true,
			nextEvent: '',
		});
	});

	it('unsets hover state', () => {
		compInstance.handleMouseOver();
		expect(compInstance.state).toEqual({
			isHovering: true,
			nextEvent: '',
		});
		compInstance.handleMouseOut();
		expect(compInstance.state).toEqual({
			isHovering: false,
			nextEvent: '',
		});
	});
});
