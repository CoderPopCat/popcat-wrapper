const { baseurl } = require('../../utils/request');

/**
 * Generates a colorify image URL with the provided image and color.
 *
 * @param {string} image - Image URL for the colorify effect. (Required)
 * @param {string} color - Color for the colorify effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated colorify image.
 *
 * @throws {Error} Throws an error if required parameters are missing.
 *
 * @example
 * colorify("https://example.com/image.jpg", "#FF0000")
 */
function colorify(image, color) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the colorify function. Need help? https://dsc.gg/popcatcom",
		);
	if (!color)
		throw new Error(
			"[Popcat Wrapper] The field 'color' was left empty in the colorify function. Need help? https://dsc.gg/popcatcom",
		);
	const url = `${baseurl}v2/colorify?image=${encodeURIComponent(image)}&color=${encodeURIComponent(color)}`;
	return url;
}

module.exports = { colorify };
