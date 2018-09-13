import { getCachedUpcomingEvents } from '../../eventsService';

describe('EventsContainer', () => {
  let REACT_APP_STAGE_OLD;

  beforeAll(() => {
    global.fetch = require('jest-fetch-mock'); // This import should be done in setupJest, but it is not loading
    REACT_APP_STAGE_OLD = process.env.REACT_APP_STAGE;
  });

  beforeEach(() => {
    fetch.resetMocks();
  });

  afterAll(() => {
    delete process.env.REACT_APP_STAGE;
    if (REACT_APP_STAGE_OLD) {
      process.env.REACT_APP_STAGE = REACT_APP_STAGE_OLD;
    }
  });

  describe('getCachedUpcomingEvents', () => {
    it.skip('in dev mode calls the mock', async () => {
      process.env.REACT_APP_STAGE = 'dev';
      expect(process.env.REACT_APP_STAGE).toBe('dev');
      await getCachedUpcomingEvents();
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('/mock/get-upcoming-events.json');
    });

    it('in test mode calls the API', async () => {
      delete process.env.REACT_APP_STAGE;
      process.env.REACT_APP_STAGE = 'test';
      expect(process.env.REACT_APP_STAGE).toBe('test');
      fetch.mockRejectOnce('server down');
      await getCachedUpcomingEvents();
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual(
        'https://hjoutysc5k.execute-api.eu-west-1.amazonaws.com/test/get-upcoming-events'
      );
    });

    it('in prod mode calls the API', async () => {
      delete process.env.REACT_APP_STAGE;
      expect(process.env.REACT_APP_STAGE).toBeUndefined();
      fetch.mockRejectOnce('server down');
      await getCachedUpcomingEvents();
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual(
        'https://c3mmkmwyqi.execute-api.eu-west-1.amazonaws.com/prod/get-upcoming-events'
      );
    });

    it('on failure returns null', async () => {
      fetch.mockRejectOnce('server down');
      const result = await getCachedUpcomingEvents();
      expect(result).toBeNull();
    });

    it('on first call returns the API result', async () => {
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

    it('on second call returns the cached result', async () => {
      fetch.once(JSON.stringify([]));
      const result = await getCachedUpcomingEvents();
      expect(result.length).toBe(2);
      expect(result[0].name).toBe('NEXT_MOCK_NAME_1');
    });
  });
});
