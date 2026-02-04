const { request } = require('../../utils/request');

/**
 * Generates a jokeoverhead image URL with the provided image.
 *
 * @param {string} image - Image URL for the jokeoverhead effect. (Required)
 *
 * @returns {string} - Returns the URL of the generated jokeoverhead image.
 *
 * @throws {Error} Throws an error if the image parameter is missing.
 *
 * @example
 * jokeoverhead("https://example.com/image.jpg")
 */
function jokeoverhead(image) {
	if (!image)
		throw new Error(
			"[Popcat Wrapper] The field 'image' was left empty in the jokeoverhead function. Need help? https://dsc.gg/popcatcom",
		);
	const input = `image=${encodeURIComponent(image)}`;
	const res = request('jokeoverhead', input);
	return res;
}

module.exports = { jokeoverhead };
