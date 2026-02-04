const { baseurl } = require('../../utils/request');

/**
 * Generates a drake image URL with the provided texts.
 *
 * @param {string} text1 - First text for the drake image. (Required)
 * @param {string} text2 - Second text for the drake image. (Required)
 *
 * @returns {string} - Returns the URL of the generated drake image.
 *
 * @throws {Error} Throws an error if required parameters are missing.
 *
 * @example
 * drake("Text 1", "Text 2")
 */
function drake(text1, text2) {
	if (!text1)
		throw new Error('The field text1 was left empty in the drake function');
	if (!text2)
		throw new Error('The field text2 was left empty in the drake function');
	const url = `${baseurl}v2/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
	return url;
}

module.exports = { drake };
