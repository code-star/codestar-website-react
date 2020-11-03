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

export async function fetchYouTubePlaylist(
  apiKey: string,
  playlistId: string
): Promise<VideoItem[]> {
  const VIDEOS_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&key=${apiKey}&playlistId=${playlistId}&maxResults=50`;
  const requestOptions = {
    method: 'GET',
    'Content-Type': 'application/json',
  };

  return await fetch(VIDEOS_URL, requestOptions)
    .then(r => r.text())
    .then(json => JSON.parse(json))
    .then(data => data.items)
    .then(items =>
      items
        ? items.map(
            (item: any): VideoItem => ({
              id: item.contentDetails.videoId,
              publishedAt: new Date(item.contentDetails.videoPublishedAt),
              title: item.snippet.title,
              description: item.snippet.description
                ? item.snippet.description.split('\n')
                : [],
              thumbnails: item.snippet.thumbnails,
            })
          )
        : []
    )
    .then((videos: VideoItem[]) =>
      videos.sort((a, b) => b.publishedAt.valueOf() - a.publishedAt.valueOf())
    );
}
