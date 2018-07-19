# React version of Codestar.nl

Note: uses [custom-react-scripts](https://medium.com/@kitze/configure-create-react-app-without-ejecting-d8450e96196a) to 
use HOC for [react-i18next](https://react.i18next.com/overview/getting-started) without ejecting. 


# Developing

Run `npm start`, which will run `REACT_APP_STAGE=dev react-scripts start`. It is imported that REACT_APP_STAGE is set 
to `dev`, because that switches the API calls to the local mock URLs. If REACT_APP_STAGE, it will run with the production
URLs.


# Serverless

Configured with

* yarn add serverless
* yarn serverless create --template aws-nodejs --name static-site-mailer

These keys are stored under ~/.aws/credentials
* yarn sls config credentials --provider aws --key YOUR_ACCESS_KEY_ID --secret YOUR_SECRET_ACCESS_KEY

Default region is set in serverless.yml and can be added to sls with param `-r eu-west-1`

Can also use npm without yarn, e.g.:
* npx serverless create --template aws-nodejs --name static-site-mailer
* npx sls config credentials --provider aws --key YOUR_ACCESS_KEY_ID --secret YOUR_SECRET_ACCESS_KEY

Deploy to AWS with:
* npx sls deploy --verbose
This logs (among others) the POST endpoint, e.g. https://x.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer
This can be tested with Postman, but to call it from a form, CORS must be configured.

And invoke with (--path is optional and points to a POST payload):
* PROD: `npx sls invoke --function staticSiteMailer --path data.json`
* DEV: `STATIC_SITE_MAILER_DESTINATION=example@example.com npx sls invoke local --function staticSiteMailer --path data.json`

**NOTE: Replace example@example.com by the email address validated in AWS SES** 

The destination email address is set in the environment variable STATIC_SITE_MAILER_DESTINATION
Docs: https://serverless.com/framework/docs/providers/spotinst/guide/variables/#environment-variables
Locally this can be set in a test profile or just by setting the envar with `export STATIC_SITE_MAILER_DESTINATION=example@example.com` 
In the code it is read with `process.env.STATIC_SITE_MAILER_DESTINATION`
In AWS:
* Go to https://eu-west-1.console.aws.amazon.com/lambda/ and find the function
* Scroll to Environment variables and add the correct key/value