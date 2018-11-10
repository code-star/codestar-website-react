export interface IMeetupEvent {
  coverUrl: string;
  link: string;
  name: string;
  time: number;
  withDescription: boolean;
  description?: string;
}

export interface IEventsContainerState {
  nextMeetupEvents: IMeetupEvent[];
  loadingNextMeetupEvent: boolean;
  noNextMeetupEvent: boolean;
  pastMeetupEvents: IMeetupEvent[];
  recentTweets: any[];
}
