'use strict';
const AWS = require('aws-sdk');
const SES = new AWS.SES();

function sendEmail(formData, destinationAddress, callback) {
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

	SES.sendEmail(emailParams, callback);
}

module.exports.staticSiteMailer = (event, context, callback) => {
	const formData = JSON.parse(event.body);
	const destinationAddress = process.env.STATIC_SITE_MAILER_DESTINATION;

	sendEmail(formData, destinationAddress, function(err, data) {
		if (err) {
			console.log(err, err.stack);
		} else {
			console.log(data);
		}
	});
};
