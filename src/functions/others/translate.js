const { fetch } = require('../../utils/request');

/**
 * Translates text to another language.
 *
 * @param {string} text - Text to translate. (Required)
 * @param {string} to - Target language code. (Required)
 *
 * @returns {Promise<string>} - Returns a promise that resolves to the translated text.
 *
 * @throws {Error} Throws an error if required parameters are missing or if the API returns an error.
 *
 * @example
 * translate("Hello", "es")
 */
async function translate(text, to) {
	if (!text)
		throw new Error(
			"The field 'text' was left empty in the translate function. Need help? https://dsc.gg/popcatcom",
		);
	if (!to)
		throw new Error(
			"The field 'to' was left empty in the translate function. Need help? https://dsc.gg/popcatcom",
		);

	const input = `text=${encodeURIComponent(text)}&to=${encodeURIComponent(to)}`;
	const res = await fetch(`https://api.popcat.xyz/translate?${input}`);
	const { error, message } = await res.json();
	if (error) throw new Error(`[Popcat Wrapper] Translate: ${message.error}`);
	return message.translated;
}

module.exports = { translate };
