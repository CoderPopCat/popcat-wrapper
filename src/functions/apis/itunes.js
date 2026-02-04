const { fetch } = require('../../utils/request');

/**
 * Fetches information about an iTunes song.
 *
 * @param {string} song - Name of the song to search for on iTunes. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the iTunes song information.
 *
 * @throws {Error} Throws an error if the song parameter is missing or if the API returns an error.
 *
 * @example
 * itunes("Bohemian Rhapsody")
 */
async function itunes(song) {
	if (!song)
		throw new Error("The field 'song' was left empty in the iTunes function.");
	const res = await fetch(
		`https://api.popcat.xyz/v2/itunes?song=${encodeURIComponent(song)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] iTunes: ${message.error}`);
	return message;
}

module.exports = { itunes };
