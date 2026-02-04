const { fetch } = require('../../utils/request');

/**
 * Fetches information about a subreddit.
 *
 * @param {string} subreddit - Name of the subreddit to get information for. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the subreddit information.
 *
 * @throws {Error} Throws an error if the subreddit parameter is missing or if the API returns an error.
 *
 * @example
 * subreddit("programming")
 */
async function subreddit(subreddit) {
	if (!subreddit)
		throw new Error(
			"[Popcat Wrapper] The field 'subeddit' was left empty in the SUBREDDIT function!",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/subreddit/${encodeURIComponent(subreddit)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] ${message.error}`);
	return message;
}

module.exports = { subreddit };
