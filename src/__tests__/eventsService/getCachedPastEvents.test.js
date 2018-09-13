import { getCachedPastEvents } from '../../eventsService';

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

  describe('getCachedPastEvents', () => {
    it('in dev mode calls the mock', async () => {
      process.env.REACT_APP_STAGE = 'dev';
      expect(process.env.REACT_APP_STAGE).toBe('dev');
      await getCachedPastEvents();
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('/mock/get-past-events.json');
    });

    it('in test mode calls the API', async () => {
      delete process.env.REACT_APP_STAGE;
      process.env.REACT_APP_STAGE = 'test';
      expect(process.env.REACT_APP_STAGE).toBe('test');
      fetch.mockRejectOnce('server down');
      await getCachedPastEvents();
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual(
        'https://hjoutysc5k.execute-api.eu-west-1.amazonaws.com/test/get-past-events'
      );
    });

    it('in prod mode calls the API', async () => {
      delete process.env.REACT_APP_STAGE;
      expect(process.env.REACT_APP_STAGE).toBeUndefined();
      fetch.mockRejectOnce('server down');
      await getCachedPastEvents();
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual(
        'https://c3mmkmwyqi.execute-api.eu-west-1.amazonaws.com/prod/get-past-events'
      );
    });

    it('on failure returns null', async () => {
      fetch.mockRejectOnce('server down');
      const result = await getCachedPastEvents();
      expect(result).toBeNull();
    });

    it('on first call returns the API result', async () => {
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

    it('on second call returns the cached result', async () => {
      fetch.once(JSON.stringify([]));
      const result = await getCachedPastEvents();
      expect(result.length).toBe(2);
      expect(result[0].name).toBe('PAST_MOCK_NAME_1');
    });
  });
});
