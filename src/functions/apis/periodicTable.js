const { fetch } = require('../../utils/request');

/**
 * Fetches information about an element from the periodic table.
 *
 * @param {string} element - Element symbol or name to look up. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the element information.
 *
 * @throws {Error} Throws an error if the element parameter is missing or if the API returns an error.
 *
 * @example
 * periodicTable("Hydrogen")
 */
async function periodicTable(element) {
	if (!element)
		throw new Error(
			"[Popcat Wrapper] periodicTable(element) ==> 'element' parameter is missing.",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/periodic-table?element=${encodeURIComponent(element)}`,
	);
	const { error, message } = await res.data;
	if (error)
		throw new Error(`[Popcat Wrapper] Periodic Table: ${message.error}`);
	return message;
}

module.exports = { periodicTable };
