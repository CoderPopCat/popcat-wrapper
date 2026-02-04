const { baseurl } = require('../../utils/request');

/**
 * Generates a jail image URL with the provided image.
 *
 * @param {string} imageURL - Image URL for the jail effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated jail image.
 *
 * @throws {Error} Throws an error if the imageURL parameter is missing.
 *
 * @example
 * jail("https://example.com/image.jpg")
 */
function jail(imageURL) {
	if (!imageURL)
		throw new Error(
			"[Popcat Wrapper] jail(imageURL) ==> 'imageURL' parameter is missing.",
		);
	const url = `${baseurl}v2/jail?image=${encodeURIComponent(imageURL)}`;
	return url;
}

module.exports = { jail };
