import { getAzureUrl } from "./utility/getAzureUrl";

export interface IPublication {
  id: string,
  latestPublishedAt: string,
  author: string,
  authorImg: string,
  title: string,
  paragraphs: string[],
  uniqueSlug: string,
  previewImgId: string
}

let cachedPublications: IPublication[] = [];

async function fetchPublications(): Promise<IPublication[]> {
  try {
    const url = getAzureUrl('GetPublications');
    cachedPublications = await fetch(url).then(data => data.json());
    return cachedPublications;
  } catch (err) {
    // fail silently
    return [];
  }
}

// Should be drop-in replaceable with Redux Thunk
export async function getCachedPublications(): Promise<IPublication[]> {
  return cachedPublications.length
    ? cachedPublications
    : fetchPublications();
}
