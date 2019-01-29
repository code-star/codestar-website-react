import { VideoItem } from './fetchYouTubePlaylist';

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
  videos: VideoItem[];
}

export interface ITwitterUser {
  name: string;
  profile_image_url_https: string;
  screen_name: string;
}

export interface ITweet {
  id: number;
  id_str: string;
  user: ITwitterUser;
  created_at: string;
  text: string;
}
