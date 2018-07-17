'use strict';
const AWS = require('aws-sdk');
const SES = new AWS.SES();

function sendEmail(formData, callback) {
	const emailParams = {
		Source: '', // SES SENDING EMAIL  // TODO DO NOT COMMIT THIS
		ReplyToAddresses: [formData.reply_to],
		Destination: {
			ToAddresses: [''], // TODO DO NOT COMMIT THIS
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

	sendEmail(formData, function(err, data) {
		if (err) {
			console.log(err, err.stack);
		} else {
			console.log(data);
		}
	});
};
