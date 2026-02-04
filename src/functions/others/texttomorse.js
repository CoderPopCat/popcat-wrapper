const { fetch } = require('../../utils/request');

/**
 * Converts text to morse code.
 *
 * @param {string} text - Text to convert to morse code. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the morse code.
 *
 * @throws {Error} Throws an error if the text parameter is missing or if the API returns an error.
 *
 * @example
 * texttomorse("Hello World")
 */
async function texttomorse(text) {
	if (!text)
		throw new Error(
			"The field 'text' was left empty in the texttomorse function. Need help? https://dsc.gg/popcatcom",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/texttomorse?text=${encodeURIComponent(text)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] TextToMorse: ${message.error}`);
	return message;
}

module.exports = { texttomorse };
