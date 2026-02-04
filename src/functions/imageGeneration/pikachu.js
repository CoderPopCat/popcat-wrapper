const { baseurl } = require('../../utils/request');

/**
 * Generates a pikachu image URL with the provided text.
 *
 * @param {string} text - Text for the pikachu image. (Required)
 *
 * @returns {string} - Returns the URL of the generated pikachu image.
 *
 * @throws {Error} Throws an error if the text parameter is missing.
 *
 * @example
 * pikachu("Hello World")
 */
function pikachu(text) {
	if (!text)
		throw new Error(
			"[Popcat Wrapper] The field 'text' was left empty in the pikachu function. Need help? https://dsc.gg/popcatcom",
		);
	const url = `${baseurl}v2/pikachu?text=${encodeURIComponent(text)}`;
	return url;
}

module.exports = { pikachu };
