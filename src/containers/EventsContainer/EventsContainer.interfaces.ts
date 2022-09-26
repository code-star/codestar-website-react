import { VideoItem } from './fetchYouTubePlaylist';

export interface IMeetupEvent {
  coverUrl: string;
  link: string;
  name: string;
  time: number;
  withDescription: boolean;
  description?: string;
}

export interface ITwitterUser {
  id: string;
  username: string;
  name: string;
  profile_image_url: string;
}

export interface ITweet {
  id: number;
  id_str: string;
  created_at: string;
  text: string;
}
export interface IEventsContainerState {
  nextMeetupEvents: IMeetupEvent[];
  loadingNextMeetupEvent: boolean;
  noNextMeetupEvent: boolean;
  pastMeetupEvents: IMeetupEvent[];
  recentTweets: { data: ITweet[]; author: ITwitterUser } | null;
  videos: VideoItem[];
}
