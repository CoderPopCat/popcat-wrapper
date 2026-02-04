const { fetch } = require('../../utils/request');

/**
 * Fetches lyrics for the provided song.
 *
 * @param {string} song - Name of the song to get lyrics for. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the song lyrics information.
 *
 * @throws {Error} Throws an error if the song parameter is missing or if the API returns an error.
 *
 * @example
 * lyrics("Bohemian Rhapsody")
 */
async function lyrics(song) {
	if (!song)
		throw new Error(
			"[Popcat Wrapper] The field 'song' was left empty int he LYRICS function!",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/lyrics?song=${encodeURIComponent(song)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] ${message.error}`);
	return message;
}

module.exports = { lyrics };
