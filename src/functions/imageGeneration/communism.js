const { baseurl } = require('../../utils/request');

/**
 * Generates a communism image URL with the provided image.
 *
 * @param {string} imageURL - Image URL for the communism effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated communism image.
 *
 * @throws {Error} Throws an error if the imageURL parameter is missing.
 *
 * @example
 * communism("https://example.com/image.jpg")
 */
async function communism(imageURL) {
	if (!imageURL)
		throw new Error(
			"[Popcat Wrapper] communism(image) => 'imageURL' parameter is missing.",
		);
	const url = `${baseurl}v2/communism?image=${encodeURIComponent(imageURL)}`;
	return url;
}

module.exports = { communism };
