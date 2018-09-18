import React from 'react';
import ReactDOM from 'react-dom';
import EventsContainer from './EventsContainer';
import renderer from 'react-test-renderer';
import * as eventsService from '../../eventsService';

jest.mock('../../eventsService');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventsContainer />, div);
});

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
      // Mock response for getCachedUpcomingEvents
      eventsService.getCachedUpcomingEvents.mockResolvedValue([
        {
          name: 'UPCOMING_MOCK_NAME',
          time: 'UPCOMING_MOCK_TIME',
          link: 'UPCOMING_MOCK_LINK',
        },
      ]);
      // Mock response for getCachedPastEvents
      eventsService.getCachedPastEvents.mockResolvedValue([]);
      // Initial state
      expect(compInstance.state.nextMeetupEvents).toEqual([]);
      expect(compInstance.state.loadingNextMeetupEvent).toBeTruthy();
      expect(compInstance.state.noNextMeetupEvent).toBeFalsy();
      expect(compInstance.state.pastMeetupEvents).toEqual([]);
      // Call and state after call
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
      // Mock response for getCachedUpcomingEvents
      eventsService.getCachedUpcomingEvents.mockResolvedValue([]);
      // Mock response for getCachedPastEvents
      eventsService.getCachedPastEvents.mockResolvedValue([
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
      ]);
      // Initial state
      expect(compInstance.state.nextMeetupEvents).toEqual([]);
      expect(compInstance.state.loadingNextMeetupEvent).toBeTruthy();
      expect(compInstance.state.noNextMeetupEvent).toBeFalsy();
      expect(compInstance.state.pastMeetupEvents).toEqual([]);
      // Call and state after call
      await compInstance.fetchEvents();
      expect(compInstance.state.nextMeetupEvents).toEqual([]);
      expect(compInstance.state.loadingNextMeetupEvent).toBeFalsy();
      expect(compInstance.state.noNextMeetupEvent).toBeTruthy();
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
});
