const { request } = require('../../utils/request');

/**
 * Generates a welcome card image URL with the provided parameters.
 *
 * @param {string} background - Background image URL for the welcome card. (Required)
 * @param {string} avatar - Avatar image URL for the welcome card. (Required)
 * @param {string} text_1 - First text for the welcome card. (Required)
 * @param {string} text_2 - Second text for the welcome card. (Required)
 * @param {string} text_3 - Third text for the welcome card. (Required)
 *
 * @returns {string} - Returns the URL of the generated welcome card image.
 *
 * @throws {Error} Throws an error if required parameters are missing or invalid.
 *
 * @example
 * welcomecard("https://example.com/background.png", "https://example.com/avatar.jpg", "Welcome", "User", "Have fun!")
 */
function welcomecard(background, avatar, text_1, text_2, text_3) {
	if (!background)
		throw new SyntaxError(
			'welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> background is null.',
		);
	if (!background.startsWith('https://'))
		throw new Error(
			'[Popcat Wrapper] welcomecard(background, avatar, text_1, text_2, text_3) ==> background must be a valid URL.',
		);
	if (!background.endsWith('.png'))
		throw new Error(
			'[Popcat Wrapper] welcomecard(background, avatar, text_1, text_2, text_3) ==> background must be a PNG.',
		);
	if (!avatar)
		throw new SyntaxError(
			'welcomecard(background, avatar, text_1, text_2, text_3) ==> avatar is null',
		);
	if (!text_1)
		throw new SyntaxError(
			'welcomecard(background, avatar, text_1, text_2, text_3) ==> text_1 is null',
		);
	if (!text_2)
		throw new SyntaxError(
			'welcomecard(background, avatar, text_1, text_2, text_3) ==> text_2 is null',
		);
	if (!text_3)
		throw new SyntaxError(
			'welcomecard(background, avatar, text_1, text_2, text_3) ==> text_3 is null',
		);

	const input = `background=${encodeURIComponent(background)}&avatar=${encodeURIComponent(avatar)}&text1=${encodeURIComponent(text_1)}&text2=${encodeURIComponent(text_2)}&text3=${encodeURIComponent(text_3)}`;
	const welcomeimg = request('welcomecard', input);
	return welcomeimg;
}

module.exports = { welcomecard };
