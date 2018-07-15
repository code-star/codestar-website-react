/**
 * JSONP util for CORS requests, e.g. unsigned Meetup API
 * @param url to make the JSONP request to
 * @returns promise with the response data
 */
export function jsonp(url) {
	return new Promise(resolve => {
		// Clean URL to be a valid JS function name. Whitelist is "word" chars, i.e. [A-Za-z0-9_]
		const cleanUrl = url.replace(/[^\w]/gi, '');
		// Prevent duplicate function names
		const callbackName = `jsonp_callback_${new Date().getTime()}_${cleanUrl}`;

		// Store the function to be called once the JSONP requests resolves on the global scope
		window[callbackName] = function(data) {
			delete window[callbackName];
			document.body.removeChild(script);
			resolve(data);
		};

		// Create a script element, the URL contains the name of the callback function
		const script = document.createElement('script');
		script.src =
			url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
		document.body.appendChild(script);
	});
}
