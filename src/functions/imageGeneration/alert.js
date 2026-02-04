const { request } = require('../../utils/request');

/**
 * Generates an alert image URL with the provided text.
 *
 * @param {string} text - Text for the alert image. (Required)
 *
 * @returns {string} - Returns the URL of the generated alert image.
 *
 * @throws {Error} Throws an error if the text parameter is missing.
 *
 * @example
 * alert("Hello World")
 */
function alert(text) {
	if (!text)
		throw new Error(
			"[Popcat Wrapper] The field 'text' was left empty in the alert function. Need help? https://dsc.gg/popcatcom",
		);
	const input = `text=${encodeURIComponent(text)}`;
	const res = request('alert', input);
	return res;
}

module.exports = { alert };
