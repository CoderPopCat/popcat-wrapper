const { baseurl } = require('../../utils/request');

/**
 * Generates a wanted image URL with the provided image.
 *
 * @param {string} image - Image URL for the wanted poster. (Required)
 *
 * @returns {string} - Returns the URL of the generated wanted image.
 *
 * @throws {Error} Throws an error if the image parameter is missing.
 *
 * @example
 * wanted("https://example.com/image.jpg")
 */
function wanted(image) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the WANTED function!",
		);
	const url = `https://api.popcat.xyz/v2/wanted?image=${encodeURIComponent(image)}`;
	return url;
}

module.exports = { wanted };
