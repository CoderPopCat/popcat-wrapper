const { fetch } = require('../../utils/request');

/**
 * Fetches a random meme.
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the meme information.
 *
 * @throws {Error} Throws an error if the API returns an error.
 *
 * @example
 * randommeme()
 */
async function randommeme() {
	const res = await fetch(`https://api.popcat.xyz/v2/meme`);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] RandomMeme: ${message.error}`);
	return message;
}

module.exports = { randommeme };
