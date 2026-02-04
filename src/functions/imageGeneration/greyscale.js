const { request } = require('../../utils/request');

/**
 * Generates a greyscale image URL with the provided image.
 *
 * @param {string} image - Image URL for the greyscale effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated greyscale image.
 *
 * @throws {Error} Throws an error if the image parameter is missing.
 *
 * @example
 * greyscale("https://example.com/image.jpg")
 */
function greyscale(image) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the greyscale function. Need help? https://dsc.gg/popcatcom",
		);
	const input = `image=${encodeURIComponent(image)}`;
	const res = request('greyscale', input);
	return res;
}

module.exports = { greyscale };
