const { request } = require('../../utils/request');

/**
 * Generates an uncover image URL with the provided image.
 *
 * @param {string} image - Image URL for the uncover effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated uncover image.
 *
 * @throws {Error} Throws an error if the image parameter is missing.
 *
 * @example
 * uncover("https://example.com/image.jpg")
 */
function uncover(image) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the uncover function. Need help? https://dsc.gg/popcatcom",
		);
	const input = `image=${encodeURIComponent(image)}`;
	const res = request('uncover', input);
	return res;
}

module.exports = { uncover };
