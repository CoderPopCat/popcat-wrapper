const { fetch } = require('../../utils/request');

/**
 * Generates a clown image URL with the provided image.
 *
 * @param {string} image - Image URL for the clown effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated clown image.
 *
 * @throws {Error} Throws an error if the image parameter is missing.
 *
 * @example
 * clown("https://example.com/image.jpg")
 */
function clown(image) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the clown function. Need help? https://dsc.gg/popcatcom",
		);
	const url = `https://api.popcat.xyz/v2/clown?image=${encodeURIComponent(image)}`;
	return url;
}

module.exports = { clown };
