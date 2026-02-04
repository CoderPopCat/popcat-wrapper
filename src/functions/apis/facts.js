const { fetch, baseurl } = require('../../utils/request');

/**
 * Generates a facts image with the provided text.
 *
 * @param {string} text - Text for the facts image. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the facts image information.
 *
 * @throws {Error} Throws an error if the text parameter is missing or if the API returns an error.
 *
 * @example
 * facts("Hello World")
 */
async function facts(text) {
	if (!text)
		throw new Error("The field 'text' was left empty in the facts functuion.");
	const res = await fetch(
		`${baseurl}v2/facts?text=${encodeURIComponent(text)}`,
	);
	const { error, message } = await res.json();
	if (error) throw new Error(`[Popcat Wrapper] Facts: ${message.error}`);
	return message;
}

module.exports = { facts };
