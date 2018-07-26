# Codestar website

Note: uses [custom-react-scripts](https://medium.com/@kitze/configure-create-react-app-without-ejecting-d8450e96196a) to 
use HOC for [react-i18next](https://react.i18next.com/overview/getting-started) without ejecting. 

**Contents:**

1. [Developing](#developing)
1. [Deploying](#deploying)
1. [Hosting config](#hosting-config)
1. [Serverless](#serverless)
1. [Hosting pictures](#hosting-pictures)

## Developing

Run `npm start`, which will run `REACT_APP_STAGE=dev react-scripts start`. It is important that `REACT_APP_STAGE` is set to `dev`, because that switches the API calls to the local mock URLs. Otherwise, it will run with the production URLs.

## Deploying

Deployments are handled by Travis CI.

Triggering a deployment is done by committing/merging to the:

- `develop` branch for the test site
- `production` branch for the production site

## Hosting config

Only allow https (better SEO, encrypted form data), so set up Cloudflare to use Force HTTPS and HSTS. In Cloudflare go to the "Crypto" tab. Scroll down to "Always use HTTPS" and change the toggle to "on".

**NOTE** turning on HSTS is difficult to revert, so discuss in the team first. Below that there is the option "HTTP Strict Transport Security (HSTS)". Click "Enable HSTS".

**NOTE** If you need to disable HTTPS on your domain, you must first disable HSTS in your Cloudflare dashboard and wait for the max-age to lapse to guarantee that every browser is aware of this change before you can disable HTTPS.

## Serverless

### Configuration

To configure, run:

```bash
yarn add serverless
yarn serverless create --template aws-nodejs --name static-site-mailer
yarn sls config credentials --provider aws --key YOUR_ACCESS_KEY_ID --secret YOUR_SECRET_ACCESS_KEY
```

(The keys will be stored under `~/.aws/credentials`)

The default region is set in `serverless.yml` and can be added to `sls` with the parameter `-r eu-west-1`

It is also possible to use `npm` instead of `yarn`:

```bash
npx serverless create --template aws-nodejs --name static-site-mailer
npx sls config credentials --provider aws --key YOUR_ACCESS_KEY_ID --secret YOUR_SECRET_ACCESS_KEY
```

Deploy to AWS:

```bash
npx sls deploy --verbose
```

This logs (among others) the `POST` endpoint (https://x.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer).

This can be tested with Postman, but to call it from a form, CORS must be configured.

### Calling the function

To invoke the function, run:

- Production:

	```bash
	npx sls invoke --function staticSiteMailer --path serverless/staticSiteMailer-dummy-payload.json
	```
- Test:

	```bash
	STATIC_SITE_MAILER_DESTINATION=example@example.com DEBUG=true npx sls invoke local --function staticSiteMailer --path serverless/staticSiteMailer-dummy-payload.json
	```

(`--path` is optional and points to a `POST` payload)

**NOTE: Replace `example@example.com` with the email address validated in AWS SES**

The environment variable `DEBUG=true` will allow calls from `localhost:3000`. This can also be enabled on AWS if needed. 

The destination email address is set in the environment variable `STATIC_SITE_MAILER_DESTINATION`. You can check the [documentation](https://serverless.com/framework/docs/providers/spotinst/guide/variables/#environment-variables) for more information about environment variables.

Locally this can be set in a test profile or just by setting the environment variable with `export STATIC_SITE_MAILER_DESTINATION=example@example.com`. In the code it is accessed via `process.env.STATIC_SITE_MAILER_DESTINATION`.

To change it in AWS:

- Go to `https://eu-west-1.console.aws.amazon.com/lambda/` and find the function
- Scroll to Environment variables and add the correct key/value

## Hosting pictures

We should use Cloudinary as much as possible for hosting images. The [`ResponsiveImage.jsx` file](src/ResponsiveImage/ResponsiveImage.jsx) contains utilities for doing so:

- `<ResponsiveImage>` provides a `srcset` containing multiple versions of the specified picture with multiple widths hosted on Cloudinary
- `responsiveImageProps()` returns the necessary props for components like `<img>` or `<Avatar>` with the same properties as a `<ResponsiveImage>`
- `getResponsiveImageUrl()` returns the Cloudinary URL for a specific image and width

### Notes

- The folder structure in `/public` should be replicated on Cloudinary, in the root `/codestar.nl`: for instance, `/public/images/codestar_logo_dark.svg` should be hosted in `/codestar.nl/images/codestar_logo_dark.svg`
- For images used in components with a fixed size, also request a fixed size from Cloudinary (keep Retina displays in mind, get 2x the size needed)
- Cloudinary is versioned, so when replacing an already existing image, the change will only be visible if the version number in the URL is changed:

  ```
  http://res.cloudinary.com/codestar/image/upload/v1532077524/codestar.nl/images/codestar_logo_dark.svg
  ```
  
  Otherwise, the image before the replacing will be shown. To change the version number, edit the [`.env` file](.env):
  
  ```
  REACT_APP_CLOUDINARY_ID=v1532588516
  ```
