const { baseurl } = require('../../utils/request');

/**
 * Generates a supreme image URL with the provided text.
 *
 * @param {string} text - Text to be displayed in the supreme image. (Required)
 *
 * @returns {string} - Returns the URL of the generated supreme image.
 *
 * @throws {Error} Throws an error if the text parameter is missing or empty.
 *
 * @example
 * supreme("Hello World")
 */
function supreme(text) {
	if (!text || text.length === 0)
		throw new Error(
			"[Popcat Wrapper] supreme(text) => 'text' parameter is missing.",
		);
	const url = `${baseurl}v2/supreme?text=${encodeURIComponent(text)}`;
	return url;
}

module.exports = { supreme };
