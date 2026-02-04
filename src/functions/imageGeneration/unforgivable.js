const { baseurl } = require('../../utils/request');

/**
 * Generates an unforgivable image URL with the provided text.
 *
 * @param {string} text - Text for the unforgivable image. (Required)
 *
 * @returns {string} - Returns the URL of the generated unforgivable image.
 *
 * @throws {Error} Throws an error if the text parameter is missing.
 *
 * @example
 * unforgivable("Hello World")
 */
function unforgivable(text) {
	if (!text)
		throw new Error(
			"[Popcat Wrapper] unforgivable(text) ==> 'text' parameter is missing.",
		);
	const url = `${baseurl}v2/unforgivable?text=${encodeURIComponent(text)}`;
	return url;
}

module.exports = { unforgivable };
