# Collecting recent tweets

## Using OAuth-enabled curl for the Twitter API
- Collect data with `twurl /1.1/statuses/user_timeline.json\?screen_name\=[some-screen-name]&count=[some-count]`
- Update data in `public/mock/get-recent-tweets.json`

## Updaing getRecentTweets() lambda function environment parameters
- Navigate to [getRecentTweets()](https://eu-west-1.console.aws.amazon.com/lambda/home?region=eu-west-1#/functions/codestar-nl-serverless-test-getRecentTweets)

- Update values of `DEBUG`, `SCREEN_NAME`, `TWEET_COUNT` environment variables.
