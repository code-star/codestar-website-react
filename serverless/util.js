// API calls only over HTTPS!
const allowedOrigins = ['https://www.codestar.nl', 'https://test.codestar.nl'];

// Response headers
const headers = origin => ({
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': origin,
});

/*
 Gets reponse headers but throws error if the requesting origin is not whitelisted.
 This must be done before anything else to prevent calls from unknown origins.
 */
module.exports.safeGetHeaders = (origin) => {
	const debug = process.env.DEBUG;
	if(debug === 'true') {
		allowedOrigins.push('http://localhost:3000');
	}
	if(!allowedOrigins.includes(origin)) {
		throw new Error(`Not white-listed origin: ${origin}`);
	} else {
		return headers(origin);
	}
};
