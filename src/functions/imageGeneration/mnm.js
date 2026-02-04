const { request } = require('../../utils/request');

/**
 * Generates an mnm image URL with the provided image.
 *
 * @param {string} image - Image URL for the mnm effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated mnm image.
 *
 * @throws {Error} Throws an error if the image parameter is missing.
 *
 * @example
 * mnm("https://example.com/image.jpg")
 */
function mnm(image) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the mnm function. Need help? https://dsc.gg/popcatcom",
		);
	const input = `image=${encodeURIComponent(image)}`;
	const res = request('mnm', input);
	return res;
}

module.exports = { mnm };
