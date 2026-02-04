const { fetch } = require('../../utils/request');

/**
 * Fetches a random shower thought.
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to a shower thought.
 *
 * @throws {Error} Throws an error if the API returns an error.
 *
 * @example
 * showerthought()
 */
async function showerthought() {
	const res = await fetch(`https://api.popcat.xyz/v2/showerthoughts`);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] ${message.error}`);
	return message;
}

module.exports = { showerthought };
