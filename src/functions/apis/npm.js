const { fetch, baseurl } = require('../../utils/request');

/**
 * Fetches information about an npm package.
 *
 * @param {string} pkg - Name of the npm package to get information for. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the npm package information.
 *
 * @throws {Error} Throws an error if the pkg parameter is missing or if the API returns an error.
 *
 * @example
 * npm("express")
 */
async function npm(pkg) {
	if (!pkg)
		throw new Error(
			"The field 'package name' was left empty in the NPM function!",
		);
	const url = `${baseurl}v2/npm?q=${encodeURIComponent(pkg)}`;
	const res = await fetch(url);
	const { error, message } = await res.json();
	if (error) throw new Error(`[Popcat Wrapper] NPM: ${message.error}`);
	return message;
}

module.exports = { npm };
