import { getCachedUpcomingEvents } from './eventsService';

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
});
