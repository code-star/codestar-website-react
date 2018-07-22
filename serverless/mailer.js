'use strict';
const AWS = require('aws-sdk');
const SES = new AWS.SES();

// Form data only over HTTPS!
const allowedOrigin = 'https://www.codestar.nl';

// Response headers
const headers = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': allowedOrigin,
};

function sendEmail(formData, destinationAddress) {
	return new Promise((resolve, reject) => {
		const emailParams = {
			Source: destinationAddress, // SES SENDING EMAIL
			ReplyToAddresses: [formData.email],
			Destination: {
				ToAddresses: [ destinationAddress ],
			},
			Message: {
				Body: {
					Text: {
						Charset: 'UTF-8',
						Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
					},
				},
				Subject: {
					Charset: 'UTF-8',
					Data: `Message from ${formData.name} through the codestar.nl contact form`,
				},
			},
		};

		SES.sendEmail(emailParams, (err, data) => {
			if (err) {
				reject(err, err.stack);
			} else {
				resolve(data);
			}
		});
	});
}

module.exports.staticSiteMailer = async (event, context, callback) => {
	const formData = JSON.parse(event.body);
	const destinationAddress = process.env.STATIC_SITE_MAILER_DESTINATION;

	try {
		if(event.headers.origin !== allowedOrigin) {
			throw new Error(`Not white-listed origin: ${event.headers.origin}`);
		}
		const data = await sendEmail(formData, destinationAddress);
		callback(null, {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				message: data,
			}),
		});
	} catch(err) {
		console.log(err, err.stack);
		callback(null, {
			statusCode: 500,
			headers,
			body: JSON.stringify({
				message: err.message,
			}),
		});
	}
};
