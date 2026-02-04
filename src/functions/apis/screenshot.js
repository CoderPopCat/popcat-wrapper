const { fetch } = require('../../utils/request');

/**
 * Takes a screenshot of the provided URL.
 *
 * @param {string} url - URL to take a screenshot of. (Required)
 *
 * @returns {Promise<string>} - Returns a promise that resolves to the screenshot image URL.
 *
 * @throws {Error} Throws an error if the url parameter is missing or invalid.
 *
 * @example
 * screenshot("https://example.com")
 */
async function screenshot(url) {
	if (!url)
		throw new Error(
			"[Popcat Wrapper] screenshot(url) ==> 'url' parameter is missing.",
		);
	const { isurl } = await fetch(
		`https://api.popcat.xyz/v2/is-url?url=${encodeURIComponent(url)}`,
	).then((r) => r.data);
	if (isurl === false)
		throw new Error("[Popcat Wrapper] screenshot(url) ==> 'url' is not valid!");
	const img = `https://api.popcat.xyz/v2/screenshot?url=${encodeURIComponent(url)}`;
	return img;
}

module.exports = { screenshot };
