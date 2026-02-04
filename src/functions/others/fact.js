const { fetch, baseurl } = require('../../utils/request');

/**
 * Fetches a random fact.
 *
 * @returns {Promise<string>} - Returns a promise that resolves to a random fact.
 *
 * @throws {Error} Throws an error if the API returns an error.
 *
 * @example
 * fact()
 */
async function fact() {
	const res = await fetch(`${baseurl}v2/fact`);
	const { error, message } = await res.json();
	if (error) throw new Error(`[Popcat Wrapper] Fact: ${message.error}`);
	return message.fact;
}

module.exports = { fact };
