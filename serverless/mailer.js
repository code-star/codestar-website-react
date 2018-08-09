'use strict';
const AWS = require('aws-sdk');
const SES = new AWS.SES();
const util = require('./util');

function sendEmail(formData, sourceAddress, destinationAddress) {
	return new Promise((resolve, reject) => {
		const emailParams = {
			Source: sourceAddress, // SES SENDING EMAIL
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
	const sourceAddress = process.env.STATIC_SITE_MAILER_SOURCE;
	const destinationAddress = process.env.STATIC_SITE_MAILER_DESTINATION;

	try {
		const headers = util.safeGetHeaders(event.headers.origin);
		const data = await sendEmail(formData, sourceAddress, destinationAddress);
		callback(null, {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				message: data,
			}),
		});
	} catch(err) {
		console.log(err, err.stack);
		callback('Failed STATIC_SITE_MAILER ' + err);
	}
};
