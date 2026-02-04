const { fetch } = require('../../utils/request');

/**
 * Generates a biden image URL with the provided text.
 *
 * @param {string} text - Text for the biden image. (Required)
 *
 * @returns {string} - Returns the URL of the generated biden image.
 *
 * @throws {Error} Throws an error if the text parameter is missing.
 *
 * @example
 * biden("Hello World")
 */
function biden(text) {
	if (!text)
		throw new Error(
			"[Popcat Wrapper] The field 'text' was left empty in the biden function. Need help? https://dsc.gg/popcatcom",
		);
	const url = `https://api.popcat.xyz/v2/biden?text=${encodeURIComponent(text)}`;
	return url;
}

module.exports = { biden };
