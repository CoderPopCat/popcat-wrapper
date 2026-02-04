const { fetch } = require('../../utils/request');

/**
 * Generates a gun image URL with the provided image.
 *
 * @param {string} image - Image URL for the gun effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated gun image.
 *
 * @throws {Error} Throws an error if the image parameter is missing.
 *
 * @example
 * gun("https://example.com/image.jpg")
 */
function gun(image) {
	if (!image)
		throw new Error("The field 'image' was left empty in the GUN function!");
	const url = `https://api.popcat.xyz/v2/gun?image=${encodeURIComponent(image)}`;
	return url;
}

module.exports = { gun };
