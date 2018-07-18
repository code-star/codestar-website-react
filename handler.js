'use strict';
const AWS = require('aws-sdk');
const SES = new AWS.SES();

function sendEmail(formData, destinationAddress) {
	return new Promise((resolve, reject) => {
		const emailParams = {
			Source: destinationAddress, // SES SENDING EMAIL
			ReplyToAddresses: [formData.reply_to],
			Destination: {
				ToAddresses: [ destinationAddress ],
			},
			Message: {
				Body: {
					Text: {
						Charset: 'UTF-8',
						Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.reply_to}`,
					},
				},
				Subject: {
					Charset: 'UTF-8',
					Data: 'New message from codestar.nl',
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

// Response headers
const headers = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': 'https://codestar.nl',
};

module.exports.staticSiteMailer = async (event, context, callback) => {
	const formData = JSON.parse(event.body);
	const destinationAddress = process.env.STATIC_SITE_MAILER_DESTINATION;

	try {
		const data = await sendEmail(formData, destinationAddress);
		//console.log(data)
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
