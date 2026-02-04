const { baseurl } = require('../../utils/request');

/**
 * Generates an opinion image URL with the provided image and text.
 *
 * @param {string} image - Image URL for the opinion image. (Required)
 * @param {string} text - Text for the opinion image. (Required)
 *
 * @returns {string} - Returns the URL of the generated opinion image.
 *
 * @throws {Error} Throws an error if required parameters are missing.
 *
 * @example
 * opinion("https://example.com/image.jpg", "Hello World")
 */
function opinion(image, text) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the OPINION function!",
		);
	if (!text)
		throw new Error(
			"[Popcat Wrapper] The field 'text' was left empty in the OPINION function!",
		);
	const img = `https://api.popcat.xyz/v2/opinion?image=${encodeURIComponent(image)}&text=${encodeURIComponent(text)}`;
	return img;
}

module.exports = { opinion };
