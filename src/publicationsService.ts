export interface IPublication {
  latestPublishedAt: string,
  author: string,
  authorImg: string,
  title: string,
  paragraphs: string[],
  uniqueSlug: string
}

let cachedPublications: IPublication[] = [];

// This has been wrapped in a function to able to run unit tests where process.env.REACT_APP_STAGE is changed
function getUrl(lambdaName: string): string {
  if (process.env.REACT_APP_STAGE === 'dev') {
    return `/mock/${lambdaName}.json`;
  }
  const AWS_PREFIX =
    process.env.REACT_APP_STAGE === 'test' ? 'hjoutysc5k' : '267sder6c7';
  const AWS_STAGE = process.env.REACT_APP_STAGE === 'test' ? 'test' : 'prod';
  return `https://${AWS_PREFIX}.execute-api.eu-west-1.amazonaws.com/${AWS_STAGE}/${lambdaName}`;
}

async function fetchPublications(): Promise<IPublication[]> {
  try {
    const url = getUrl('get-publications');
    const response = await fetch(url).then(data => data.json());
    cachedPublications = response.payload.posts;
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
