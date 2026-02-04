const { fetch } = require('../../utils/request');

/**
 * Converts text to mock format.
 *
 * @param {string} text - Text to convert to mock format. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the mocked text.
 *
 * @throws {Error} Throws an error if the text parameter is missing or if the API returns an error.
 *
 * @example
 * mock("Hello World")
 */
async function mock(text) {
	if (!text)
		throw new Error(
			"The field 'text' was left empty in the mock function. Need help? https://dsc.gg/popcatcom",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/mock?text=${encodeURIComponent(text)}`,
	);
	const { error, message } = await res.data;
	if (error) throw new Error(`[Popcat Wrapper] Mock: ${message.error}`);
	return message;
}

module.exports = { mock };
