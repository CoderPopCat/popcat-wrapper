const { fetch } = require('../../utils/request');

/**
 * Decodes binary to text.
 *
 * @param {string} binary - Binary to decode to text. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the decoded text.
 *
 * @throws {Error} Throws an error if the binary parameter is missing or if the API returns an error.
 *
 * @example
 * decode("01001000 01100101 01101100 01101100 01101111")
 */
async function decode(binary) {
	if (!binary)
		throw new Error(
			"The field 'binary' was left empty in the decode function. Need help? https://dsc.gg/popcatcom",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/decode?binary=${encodeURIComponent(binary)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] Decode: ${message.error}`);
	return message;
}

module.exports = { decode };
