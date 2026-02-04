const { baseurl } = require('../../utils/request');

/**
 * Generates a couldread image URL with the provided text.
 *
 * @param {string} text - Text to be displayed in the couldread image. (Required)
 *
 * @returns {string} - Returns the URL of the generated couldread image.
 *
 * @throws {Error} Throws an error if the text parameter is missing or empty.
 *
 * @example
 * couldread("Hello World")
 */
function couldread(text) {
	if (!text || text.length === 0)
		throw new Error(
			"[Popcat Wrapper] couldread(text) => 'text' parameter is missing.",
		);
	const url = `${baseurl}v2/couldread?text=${encodeURIComponent(text)}`;
	return url;
}

module.exports = { couldread };
