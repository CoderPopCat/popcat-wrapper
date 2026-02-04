const { baseurl } = require('../../utils/request');

/**
 * Generates a Discord message image URL with custom parameters.
 *
 * @param {Object} params - Function parameters
 * @param {string} params.username - Username for the Discord message. (Required)
 * @param {string} params.content - Content of the Discord message. (Required)
 * @param {string} [params.avatar] - Avatar URL for the Discord message.
 * @param {string} [params.color] - Color for the Discord message.
 * @param {string} [params.timestamp] - Timestamp for the Discord message.
 *
 * @returns {string} - Returns the URL of the generated Discord message image.
 *
 * @throws {Error} Throws an error if required parameters are missing.
 *
 * @example
 * discordMessage({
 *   username: "JohnDoe",
 *   content: "Hello, world!",
 *   avatar: "https://example.com/avatar.png",
 *   color: "#ff0000",
 *   timestamp: "2022-01-01T00:00:00Z"
 * })
 */
function discordMessage({ username, content, avatar, color, timestamp }) {
	if (!username)
		throw new Error(
			"[Popcat Wrapper] discordMessage({ username, content, avatar, color, timestamp }) => 'username' parameter is missing.",
		);
	if (!content)
		throw new Error(
			"[Popcat Wrapper] discordMessage({ username, content, avatar, color, timestamp }) => 'content' parameter is missing.",
		);
	const url = `${baseurl}v2/discord-message?username=${encodeURIComponent(username)}&content=${encodeURIComponent(content)}${avatar ? `&avatar=${encodeURIComponent(avatar)}` : ''}${color ? `&color=${encodeURIComponent(color)}` : ''}${timestamp ? `&timestamp=${encodeURIComponent(timestamp)}` : ''}`;
	return url;
}

module.exports = { discordMessage };
