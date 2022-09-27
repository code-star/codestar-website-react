// This has been wrapped in a function to able to run unit tests where process.env.REACT_APP_STAGE is changed
// function getUrl(lambdaName: string): string {
//   if (process.env.REACT_APP_STAGE === 'dev') {
//     return `/mock/${lambdaName}.json`;
//   }
//   const AWS_PREFIX =
//     process.env.REACT_APP_STAGE === 'test' ? 'hjoutysc5k' : '267sder6c7';
//   const AWS_STAGE = process.env.REACT_APP_STAGE === 'test' ? 'test' : 'prod';
//   return `https://${AWS_PREFIX}.execute-api.eu-west-1.amazonaws.com/${AWS_STAGE}/${lambdaName}`;
// }

// This has been wrapped in a function to able to run unit tests where process.env.REACT_APP_STAGE is changed
export const getAzureUrl = (functionName: string): string => {
  if (process.env.REACT_APP_STAGE === 'dev') {
    return `/mock/${functionName}.json`;
  }
  return `https://codestar-website-api.azurewebsites.net/api/${functionName}`;
};
