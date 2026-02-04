const { fetch } = require('../../utils/request');

/**
 * Fetches random car information.
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the car information.
 *
 * @throws {Error} Throws an error if the API returns an error.
 *
 * @example
 * car()
 */
async function car() {
	const res = await fetch(`https://api.popcat.xyz/v2/car`);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] ${message.error}`);
	return message;
}

module.exports = { car };
