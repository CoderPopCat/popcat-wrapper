const { baseurl } = require('../../utils/request');

/**
 * Generates a ship image URL with the provided images.
 *
 * @param {string} image1 - First image URL for the ship image. (Required)
 * @param {string} image2 - Second image URL for the ship image. (Required)
 *
 * @returns {string} - Returns the URL of the generated ship image.
 *
 * @throws {Error} Throws an error if required parameters are missing.
 *
 * @example
 * ship("https://example.com/image1.jpg", "https://example.com/image2.jpg")
 */
function ship(image1, image2) {
	if (!image1)
		throw new Error(
			'The field image1 was left empty in the ship function. Need help? https://dsc.gg/popcatcom',
		);
	if (!image2)
		throw new Error(
			'The field image2 was left empty in the ship function. Need help? https://dsc.gg/popcatcom',
		);
	const url = `${baseurl}v2/ship?user1=${encodeURIComponent(image1)}&user2=${encodeURIComponent(image2)}`;
	return url;
}

module.exports = { ship };
