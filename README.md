# React version of Codestar.nl

Note: uses [custom-react-scripts](https://medium.com/@kitze/configure-create-react-app-without-ejecting-d8450e96196a) to 
use HOC for [react-i18next](https://react.i18next.com/overview/getting-started) without ejecting. 


# Serverless

Configured with

* yarn add serverless
* yarn serverless create --template aws-nodejs --name static-site-mailer

These keys are stored under ~/.aws/credentials
* yarn sls config credentials --provider aws --key YOUR_ACCESS_KEY_ID --secret YOUR_SECRET_ACCESS_KEY

Can also use npm without yarn, e.g.:
* npx serverless create --template aws-nodejs --name static-site-mailer
* npx sls config credentials --provider aws --key YOUR_ACCESS_KEY_ID --secret YOUR_SECRET_ACCESS_KEY

Deploy to AWS with:
* npx sls deploy --verbose

And invoke with:
* npx sls invoke --function staticSiteMailer