const { baseurl } = require('../../utils/request');

/**
 * Generates a drip image URL with the provided image.
 *
 * @param {string} image - Image URL for the drip effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated drip image.
 *
 * @throws {Error} Throws an error if the image parameter is missing.
 *
 * @example
 * drip("https://example.com/image.jpg")
 */
function drip(image) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the drip function. Need help? https://dsc.gg/popcatcom",
		);
	const url = `${baseurl}v2/drip?image=${encodeURIComponent(image)}`;
	return url;
}

module.exports = { drip };
