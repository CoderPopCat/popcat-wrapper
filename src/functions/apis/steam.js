const { fetch } = require('../../utils/request');

/**
 * Fetches game information from Steam.
 *
 * @param {string} name - Name of the game to search for on Steam. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the Steam game information.
 *
 * @throws {Error} Throws an error if the name parameter is missing or if the API returns an error.
 *
 * @example
 * steam("Half-Life 3")
 */
async function steam(name) {
	if (!name)
		throw new Error(
			"[Popcat Wrapper] steam(name) ==> 'name' parameter is missing.",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/steam?q=${encodeURIComponent(name)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(message.error);
	return message;
}

module.exports = { steam };
