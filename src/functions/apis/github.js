const { fetch } = require('../../utils/request');

/**
 * Fetches GitHub user information.
 *
 * @param {string} username - GitHub username to get information for. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the GitHub user information.
 *
 * @throws {Error} Throws an error if the username parameter is missing or if the API returns an error.
 *
 * @example
 * github("octocat")
 */
async function github(username) {
	if (!username)
		throw new Error(
			"[Popcat Wrapper] The field 'username' was left empty in the GITHUB function!",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/github/${encodeURIComponent(username)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] Github: ${message.error}`);
	return message;
}

module.exports = { github };
