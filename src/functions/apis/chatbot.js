const { fetch } = require('../../utils/request');
/**
 * Interacts with a chatbot API.
 *
 * @param {string} content - Message content to send to the chatbot. (Required)
 * @param {string} ownername - Name of the bot owner. (Required)
 * @param {string} botname - Name of the bot. (Required)
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the chatbot response.
 *
 * @throws {Error} Throws an error if required parameters are missing or if the API returns an error.
 *
 * @example
 * chatbot("Hello", "Owner", "Bot")
 */
async function chatbot(content, ownername, botname) {
	if (!content)
		throw new Error(
			"[Popcat Wrapper] The field 'content' was left empty in the chatbot function.",
		);
	if (!ownername)
		throw new Error(
			"[Popcat Wrapper] The field 'ownername' was left empty in the chatbot function.",
		);
	if (!botname)
		throw new Error(
			"[Popcat Wrapper] The field 'botname' was left empty in the chatbot function.",
		);
	const res = await fetch(
		`https://api.popcat.xyz/v2/chatbot?msg=${encodeURIComponent(content)}&owner=${encodeURIComponent(ownername)}&botname=${encodeURIComponent(botname)}`,
	);
	const { error, message } = await res.json();
	if (error) throw new Error(`[Popcat Wrapper] Chatbot: ${message.error}`);
	return message;
}

module.exports = { chatbot };
