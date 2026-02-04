const { baseurl } = require('../../utils/request');

/**
 * Generates a quote image URL with the provided image, text, and name.
 *
 * @param {string} image - Image URL for the quote. (Required)
 * @param {string} text - Text for the quote. (Required, 1-125 characters)
 * @param {string} name - Name for the quote. (Required)
 *
 * @returns {string|Error} - Returns the URL of the generated quote image or an error if validation fails.
 *
 * @throws {Error} Throws an error if required parameters are missing or if text length is invalid.
 *
 * @example
 * quote("https://example.com/image.jpg", "Hello World", "John Doe")
 */
function quote(image, text, name) {
	if (!image || !text || !name || name.length === 0)
		throw new Error(
			"[Popcat Wrapper] quote(image, text, name) => Either 'image', 'text' or 'name' parameter is missing.",
		);
	if (text.length === 0 || text.length > 125)
		return new Error(
			"[Popcat Wrapper] quote(image, text, name) => 'text' parameter must be between 1-125 characters.",
		);
	const url = `${baseurl}v2/quote?image=${encodeURIComponent(image)}&text=${encodeURIComponent(text)}&name=${encodeURIComponent(name)}`;
	return url;
}

module.exports = { quote };
