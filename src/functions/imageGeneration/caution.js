const { request } = require('../../utils/request');

/**
 * Generates a caution image URL with the provided text.
 *
 * @param {string} text - Text for the caution image. (Required)
 *
 * @returns {string} - Returns the URL of the generated caution image.
 *
 * @throws {Error} Throws an error if the text parameter is missing.
 *
 * @example
 * caution("Hello World")
 */
function caution(text) {
	if (!text)
		throw new Error(
			"[Popcat Wrapper] The field 'text' was left empty in the caution function. Need help? https://dsc.gg/popcatcom",
		);
	const input = `text=${encodeURIComponent(text)}`;
	const res = request('caution', input);
	return res;
}

module.exports = { caution };
