import { getAzureUrl } from "../../utility/getAzureUrl";


type VideoItemThumbnail = Readonly<{
  width: number;
  height: number;
  url: string;
}>;

export type VideoItem = Readonly<{
  id: string;
  publishedAt: Date;
  title: string;
  description: string[]; // this is an array of paragraphs (raw text is splitted on `\n`)
  thumbnails: {
    default: VideoItemThumbnail;
    standard: VideoItemThumbnail;
    medium: VideoItemThumbnail;
    high: VideoItemThumbnail;
    maxres: VideoItemThumbnail;
  };
}>;

export async function fetchYouTubePlaylist(): Promise<VideoItem[]> {
  const functionName = 'youtube-playlist';
  const url = getAzureUrl(functionName);
  const requestOptions = {
    method: 'GET',
    'Content-Type': 'application/json',
  };

  try {
    const items = await fetch(url, requestOptions).then(data => data.json());
    if (items.length <= 0) {
      console.warn('No results');
      return fetch(`/mock/${functionName}.json`).then(data => data.json());
    }

    return items;
  } catch (err) {
    console.warn('Error:', err);
    return fetch(`/mock/${functionName}.json`).then(data => data.json());
  }
}
