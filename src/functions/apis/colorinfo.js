const { fetch, baseurl } = require('../../utils/request');

/**
 * Fetches information about a color.
 *
 * @param {string} color - Color to get information for. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the color information.
 *
 * @throws {Error} Throws an error if the color parameter is missing or if the API returns an error.
 *
 * @example
 * colorinfo("#FF0000")
 */
async function colorinfo(color) {
	if (!color)
		throw new Error(
			"The field 'color' was left empty in the colorinfo function. Need help? https://dsc.gg/popcatcom",
		);
	let colour = color;
	if (colour.includes('#')) colour = colour.split('#')[1];
	const res = await fetch(`${baseurl}v2/color/${encodeURIComponent(colour)}`);
	const { error, message } = await res.json();
	if (error)
		throw new Error(
			`[Popcat Wrapper] Invalid hex in the 'colorinfo' function!`,
		);
	return message;
}

module.exports = { colorinfo };
