const { fetch } = require('../../utils/request');

/**
 * Encodes text to binary.
 *
 * @param {string} text - Text to encode to binary. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the encoded binary.
 *
 * @throws {Error} Throws an error if the text parameter is missing or if the API returns an error.
 *
 * @example
 * encode("Hello World")
 */
async function encode(text) {
	if (!text)
		throw new Error(
			"The field 'text' was left empty in the encode function. Need help? https://dsc.gg/popcatcom",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/encode?text=${encodeURIComponent(text)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] Encode: ${message.error}`);
	return message;
}

module.exports = { encode };
