const { request } = require('../../utils/request');

/**
 * Generates an ad image URL with the provided image.
 *
 * @param {string} image - Image URL for the ad effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated ad image.
 *
 * @throws {Error} Throws an error if the image parameter is missing.
 *
 * @example
 * ad("https://example.com/image.jpg")
 */
function ad(image) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the ad function. Need help? https://dsc.gg/popcatcom",
		);
	const input = `image=${encodeURIComponent(image)}`;
	const res = request('ad', input);
	return res;
}

module.exports = { ad };
