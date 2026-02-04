const { fetch } = require('../../utils/request');

/**
 * Converts text to doublestruck format.
 *
 * @param {string} text - Text to convert to doublestruck format. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the doublestruck text.
 *
 * @throws {Error} Throws an error if the text parameter is missing or if the API returns an error.
 *
 * @example
 * doublestruck("Hello World")
 */
async function doublestruck(text) {
	if (!text)
		throw new Error(
			"The field 'text' was left empty in the doublestruck function. Need help? https://dsc.gg/popcatcom",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/doublestruck?text=${encodeURIComponent(text)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] DoubleStruck: ${message.error}`);
	return message;
}

module.exports = { doublestruck };
