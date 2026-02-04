const { fetch, baseurl } = require('../../utils/request');

/**
 * Fetches a random joke.
 *
 * @returns {Promise<string>} - Returns a promise that resolves to a random joke.
 *
 * @throws {Error} Throws an error if the API returns an error.
 *
 * @example
 * joke()
 */
async function joke() {
	const res = await fetch(`${baseurl}v2/joke`);
	const { error, message } = await res.json();
	if (error) throw new Error(`[Popcat Wrapper] Joke: ${message.error}`);
	return message.joke;
}

module.exports = { joke };
