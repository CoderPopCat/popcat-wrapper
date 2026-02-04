const { request } = require('../../utils/request');

/**
 * Fetches information about a country.
 *
 * @param {string} name - Name of the country to get information for. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the country information.
 *
 * @throws {Error} Throws an error if the country name parameter is missing or if the API returns an error.
 *
 * @example
 * country("United States")
 */
async function country(name) {
	if (!name)
		throw new Error(
			"[Popcat Wrapper] The field 'country name' was left empty in the COUNTRY function!",
		);
	const res = await request(`countries`, encodeURIComponent(name));
	const { error, message } = await res.json();
	if (error)
		throw new Error(
			`[Popcat Wrapper] Invalid country in the COUNTRY function!`,
		);
	return message;
}

module.exports = { country };
