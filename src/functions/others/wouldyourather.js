const { fetch } = require('../../utils/request');

/**
 * Fetches a "Would You Rather" question.
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the "Would You Rather" question.
 *
 * @throws {Error} Throws an error if the API returns an error.
 *
 * @example
 * wouldyourather()
 */
async function wouldyourather() {
	const res = await fetch(`https://api.popcat.xyz/v2/wyr`);
	const { error, message } = await res.data;
	if (error)
		throw new Error(`[Popcat Wrapper] WouldYouRather: ${message.error}`);
	return message;
}

module.exports = { wouldyourather };
