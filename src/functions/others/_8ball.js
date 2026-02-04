const { fetch } = require('../../utils/request');

/**
 * Simulates an 8ball response.
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the 8ball response.
 *
 * @throws {Error} Throws an error if the API returns an error.
 *
 * @example
 * _8ball()
 */
async function _8ball() {
	const res = await fetch(`https://api.popcat.xyz/v2/8ball`);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] 8Ball: ${message.error}`);
	return message;
}

module.exports = { _8ball };
