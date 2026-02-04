const { fetch } = require('../../utils/request');

/**
 * Fetches movie/TV show information from IMDb.
 *
 * @param {string} name - Name of the movie or TV show to search for. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the IMDb information.
 *
 * @throws {Error} Throws an error if the name parameter is missing or if the API returns an error.
 *
 * @example
 * imdb("The Matrix")
 */
async function imdb(name) {
	if (!name)
		throw new Error(
			"[Popcat Wrapper] imdb(name) ==> 'name' parameter is missing",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/imdb?q=${encodeURIComponent(name)}`,
	);
	const data = await res.data;
	if (data.error) throw new Error(data.message.error);
	return data.message;
}

module.exports = { imdb };
