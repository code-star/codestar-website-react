import React from 'react';
import ReactDOM from 'react-dom';
import EventsContainer from './EventsContainer';
import renderer from 'react-test-renderer';
// import { getCachedUpcomingEvents } from '../../eventsService.tsx';

// jest.mock('getCachedUpcomingEvents');

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<EventsContainer />, div);
	ReactDOM.unmountComponentAtNode(div);
});

// TODO test eventsService

describe('An instance of EventsContainer', () => {
	let compInstance;

	beforeAll(() => {
		global.fetch = require('jest-fetch-mock'); // This import should be done in setupJest, but it is not loading
		const comp = renderer.create(<EventsContainer />);
		compInstance = comp.getInstance();
	});

	beforeEach(() => {
		fetch.resetMocks();

		compInstance.setState({
			nextMeetupEvents: [],
			loadingNextMeetupEvent: true,
			noNextMeetupEvent: false,
			pastMeetupEvents: [],
		});
	});

	describe('fetchEvents', () => {
		it('sets nextEvents if call successful', async () => {
			// console.log(getCachedUpcomingEvents)
			// getCachedUpcomingEvents.mockResolvedValue([
			// 	{
			// 		name: 'UPCOMING_MOCK_NAME',
			// 		time: 'UPCOMING_MOCK_TIME',
			// 		link: 'UPCOMING_MOCK_LINK',
			// 	},
			// ]);

			fetch.once(
				JSON.stringify([
					{
						name: 'UPCOMING_MOCK_NAME',
						time: 'UPCOMING_MOCK_TIME',
						link: 'UPCOMING_MOCK_LINK',
					},
				])
			);
			expect(compInstance.state.nextMeetupEvents).toEqual([]);
			expect(compInstance.state.loadingNextMeetupEvent).toBeTruthy();
			expect(compInstance.state.noNextMeetupEvent).toBeFalsy();
			expect(compInstance.state.pastMeetupEvents).toEqual([]);
			await compInstance.fetchEvents();
			expect(compInstance.state.nextMeetupEvents).toEqual([
				{
					coverUrl:
						'https://res.cloudinary.com/codestar/image/upload/v1532409289/codestar.nl/meetup/codestar-night-logo.jpg',
					description: undefined,
					link: 'UPCOMING_MOCK_LINK',
					name: 'UPCOMING_MOCK_NAME',
					time: 'UPCOMING_MOCK_TIME',
					withDescription: true,
				},
			]);
			expect(compInstance.state.loadingNextMeetupEvent).toBeFalsy();
			expect(compInstance.state.noNextMeetupEvent).toBeFalsy();
			expect(compInstance.state.pastMeetupEvents).toEqual([]);
		});

		it('sets pastEvents if call successful', async () => {
			fetch
				// Response to getNextMeetupEvents
				// .once(JSON.stringify([]))
				// Response to getPastMeetupEvents
				.once(
					JSON.stringify([
						{
							name: 'PAST_MOCK_NAME_1',
							time: 'PAST_MOCK_TIME_1',
							link: 'PAST_MOCK_LINK_1',
						},
						{
							name: 'PAST_MOCK_NAME_2',
							time: 'PAST_MOCK_TIME_2',
							link: 'PAST_MOCK_LINK_2',
						},
					])
				);
			expect(compInstance.state.nextMeetupEvents).toEqual([]);
			expect(compInstance.state.loadingNextMeetupEvent).toBeTruthy();
			expect(compInstance.state.noNextMeetupEvent).toBeFalsy();
			expect(compInstance.state.pastMeetupEvents).toEqual([]);
			await compInstance.fetchEvents();
			// expect(compInstance.state.nextMeetupEvents).toEqual([]);
			expect(compInstance.state.loadingNextMeetupEvent).toBeFalsy();
			// expect(compInstance.state.noNextMeetupEvent).toBeTruthy();
			expect(compInstance.state.pastMeetupEvents).toEqual([
				{
					coverUrl:
						'https://res.cloudinary.com/codestar/image/upload/v1532409289/codestar.nl/meetup/codestar-night-logo.jpg',
					link: 'PAST_MOCK_LINK_1',
					name: 'PAST_MOCK_NAME_1',
					time: 'PAST_MOCK_TIME_1',
					withDescription: false,
				},
				{
					coverUrl:
						'https://res.cloudinary.com/codestar/image/upload/v1532409289/codestar.nl/meetup/codestar-night-logo.jpg',
					link: 'PAST_MOCK_LINK_2',
					name: 'PAST_MOCK_NAME_2',
					time: 'PAST_MOCK_TIME_2',
					withDescription: false,
				},
			]);
		});
	});

	// For future reference, if we every want to test the process.env condition:
	// This is a way to fix different values of process.env, but it does not work with `import`
	// describe('fetchEvents in dev stage', () => {
	// 	const OLD_ENV = process.env;
	//
	// 	beforeEach(() => {
	// 		jest.resetModules(); // To re-evaluate the envar in the module
	// 		process.env = { ...OLD_ENV };
	// 		delete process.env.REACT_APP_STAGE;
	// 	});
	//
	// 	afterEach(() => {
	// 		process.env = OLD_ENV;
	// 	});
	//
	// 	test('will receive process.env variables', async () => {
	// 		// set the variables
	// 		process.env.REACT_APP_STAGE = 'dev';
	//
	// 		import EventsContainer2 from './EventsContainer';
	// 		const comp = renderer.create(<EventsContainer2 />);
	// 		compInstance = comp.getInstance();
	//
	// 		await compInstance.fetchEvents();
	// 		expect(compInstance.state.nextEvent).toEqual({
	// 			mEvent: null,
	// 			loading: false,
	// 			noEvent: true,
	// 		});
	// 		expect(compInstance.state.pastEvents).toEqual([]);
	// 	});
	// })
});
