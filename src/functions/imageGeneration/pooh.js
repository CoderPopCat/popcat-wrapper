const { baseurl } = require('../../utils/request');

/**
 * Generates a pooh image URL with the provided texts.
 *
 * @param {string} text1 - First text for the pooh image. (Required)
 * @param {string} text2 - Second text for the pooh image. (Required)
 *
 * @returns {string} - Returns the URL of the generated pooh image.
 *
 * @throws {Error} Throws an error if required parameters are missing.
 *
 * @example
 * pooh("Text 1", "Text 2")
 */
function pooh(text1, text2) {
	if (!text1)
		throw new Error('The field text1 was left empty in the pooh function');
	if (!text2)
		throw new Error('The field text2 was left empty in the pooh function');
	const url = `${baseurl}v2/pooh?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
	return url;
}

module.exports = { pooh };
