const { fetch } = require('../../utils/request');

/**
 * Fetches a random color from the API.
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to a color object.
 *
 * @example
 * randomcolor()
 */
async function randomcolor() {
	const color = await fetch('https://api.popcat.xyz/v2/randomcolor').then(
		(r) => r.data,
	);
	return color;
}

module.exports = { randomcolor };
