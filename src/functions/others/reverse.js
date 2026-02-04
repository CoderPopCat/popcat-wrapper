const { fetch } = require('../../utils/request');

/**
 * Reverses the provided text.
 *
 * @param {string} text - Text to reverse. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the reversed text.
 *
 * @throws {Error} Throws an error if the text parameter is missing or if the API returns an error.
 *
 * @example
 * reverse("Hello World")
 */
async function reverse(text) {
	if (!text)
		throw new Error("The field 'text' was left empty in the reverse function");
	const res = await fetch(
		`https://api.popcat.xyz/v2/reverse?text=${encodeURIComponent(text)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] Reverse: ${message.error}`);
	return message;
}

module.exports = { reverse };
