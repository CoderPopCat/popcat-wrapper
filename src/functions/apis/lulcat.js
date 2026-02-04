const { fetch, baseurl } = require('../../utils/request');

/**
 * Fetches a lulcat image with the provided text.
 *
 * @param {string} text - Text for the lulcat image. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the lulcat image information.
 *
 * @throws {Error} Throws an error if the text parameter is missing or if the API returns an error.
 *
 * @example
 * lulcat("Hello World")
 */
async function lulcat(text) {
	if (!text)
		throw new Error(
			"[Popcat Wrapper] The field 'text' was left empty in the LUL CAT function. Need help? https://popcat.xyz/server",
		);
	const url = `${baseurl}v2/lulcat?text=${encodeURIComponent(text)}`;
	const res = await fetch(url);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] Lulcat: ${message.error}`);
	return message;
}

module.exports = { lulcat };
