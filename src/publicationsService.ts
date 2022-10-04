import { getAzureUrl } from './utility/getAzureUrl';

export interface IPublication {
  id: string;
  latestPublishedAt: string;
  author: string;
  authorImg: string;
  title: string;
  paragraphs: string[];
  uniqueSlug: string;
  previewImgId: string;
}

let cachedPublications: IPublication[] = [];

async function fetchPublications(): Promise<IPublication[]> {
  const functionName = 'publications';
  try {
    const url = getAzureUrl(functionName);
    cachedPublications = await fetch(url).then(data => data.json());
    return cachedPublications;
  } catch (err) {
    console.warn("Error: Can't retrieve publications, falling back to local copy");
    return fetch(`/mock/${functionName}.json`).then(data => data.json());
  }
}

// Should be drop-in replaceable with Redux Thunk
export async function getCachedPublications(): Promise<IPublication[]> {
  return cachedPublications.length ? cachedPublications : fetchPublications();
}
