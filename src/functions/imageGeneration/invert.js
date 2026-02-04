const { request } = require('../../utils/request');

/**
 * Generates an invert image URL with the provided image.
 *
 * @param {string} image - Image URL for the invert effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated invert image.
 *
 * @throws {Error} Throws an error if the image parameter is missing.
 *
 * @example
 * invert("https://example.com/image.jpg")
 */
function invert(image) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the invert function. Need help? https://dsc.gg/popcatcom",
		);
	const input = `image=${encodeURIComponent(image)}`;
	const res = request('invert', input);
	return res;
}

module.exports = { invert };
