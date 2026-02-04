const { baseurl } = require('../../utils/request');

/**
 * Generates a sadcat image URL with the provided text.
 *
 * @param {string} text - Text for the sadcat image. (Required)
 *
 * @returns {string} - Returns the URL of the generated sadcat image.
 *
 * @throws {Error} Throws an error if the text parameter is missing.
 *
 * @example
 * sadcat("Hello World")
 */
function sadcat(text) {
	if (!text)
		throw new Error(
			"[Popcat Wrapper] The field 'text' was left empty in the SAD CAT function. Need help? https://popcat.xyz/server",
		);
	const url = `${baseurl}v2/sadcat?text=${encodeURIComponent(text)}`;
	return url;
}

module.exports = { sadcat };
