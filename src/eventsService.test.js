import { getCachedUpcomingEvents, getCachedPastEvents } from './eventsService';

describe('An instance of EventsContainer', () => {
	beforeAll(() => {
		global.fetch = require('jest-fetch-mock'); // This import should be done in setupJest, but it is not loading
	});

	beforeEach(() => {
		fetch.resetMocks();
	});

	it('returns null on failure', async () => {
		fetch.mockRejectOnce('server down');
		const result = await getCachedUpcomingEvents();
		expect(result).toBeNull();
	});

	it('first call to getCachedUpcomingEvents returns the API result', async () => {
		fetch.once(
			JSON.stringify([
				{
					name: 'NEXT_MOCK_NAME_1',
					time: 'NEXT_MOCK_TIME_1',
					link: 'NEXT_MOCK_LINK_1',
				},
				{
					name: 'NEXT_MOCK_NAME_2',
					time: 'NEXT_MOCK_TIME_2',
					link: 'NEXT_MOCK_LINK_2',
				},
			])
		);
		const result = await getCachedUpcomingEvents();
		expect(result.length).toBe(2);
		expect(result[0].name).toBe('NEXT_MOCK_NAME_1');
	});

	it('second call to getCachedUpcomingEvents returns the cached result', async () => {
		fetch.once(JSON.stringify([]));
		const result = await getCachedUpcomingEvents();
		expect(result.length).toBe(2);
		expect(result[0].name).toBe('NEXT_MOCK_NAME_1');
	});

	it('first call to getCachedPastEvents returns the API result', async () => {
		fetch.once(
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
		const result = await getCachedPastEvents();
		expect(result.length).toBe(2);
		expect(result[0].name).toBe('PAST_MOCK_NAME_1');
	});

	it('second call to getCachedPastEvents returns the cached result', async () => {
		fetch.once(JSON.stringify([]));
		const result = await getCachedPastEvents();
		expect(result.length).toBe(2);
		expect(result[0].name).toBe('PAST_MOCK_NAME_1');
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
