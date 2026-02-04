const { request, baseurl } = require('../../utils/request');

/**
 * Generates a happysad image URL with the provided texts.
 *
 * @param {string} text1 - First text for the happysad image. (Required)
 * @param {string} text2 - Second text for the happysad image. (Required)
 *
 * @returns {string} - Returns the URL of the generated happysad image.
 *
 * @throws {Error} Throws an error if required parameters are missing.
 *
 * @example
 * happysad("Happy text", "Sad text")
 */

async function happysad(text1, text2) {
	if (!text1 || !text2) {
		throw new Error(
			"[Popcat Wrapper] happysad(text1, text2) => Either 'text1' or 'text2' parameter is missing.",
		);
	}
	const url = `${baseurl}v2/happysad?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
	return url;
}
module.exports = { happysad };
