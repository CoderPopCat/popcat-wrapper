const { fetch } = require('../../utils/request');

/**
 * Fetches weather information for the provided place.
 *
 * @param {string} place - Place to get weather information for. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the weather information.
 *
 * @throws {Error} Throws an error if the place parameter is missing or if the API returns an error.
 *
 * @example
 * weather("New York")
 */
async function weather(place) {
	if (!place)
		throw new Error(
			"[Popcat Wrapper] The field 'place' was left empty in the WEATHER function!",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/weather?q=${encodeURIComponent(place)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] Weather: ${message.error}`);
	return message;
}

module.exports = { weather };
