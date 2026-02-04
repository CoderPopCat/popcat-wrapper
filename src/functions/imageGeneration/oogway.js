const { baseurl } = require('../../utils/request');

/**
 * Generates an oogway image URL with the provided text.
 *
 * @param {string} text - Text for the oogway image. (Required)
 *
 * @returns {string} - Returns the URL of the generated oogway image.
 *
 * @throws {Error} Throws an error if the text parameter is missing.
 *
 * @example
 * oogway("Hello World")
 */
function oogway(text) {
	if (!text)
		throw new Error(
			"[Popcat Wrapper] The field 'text' was left empty in the OOGWAY function!",
		);
	const img = `https://api.popcat.xyz/v2/oogway?text=${encodeURIComponent(text)}`;
	return img;
}

module.exports = { oogway };
