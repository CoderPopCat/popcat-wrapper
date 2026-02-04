const fetch = require('../utils/request');

class Shortener {
	/**
	 * Shortens a URL using the popcat URL shortener service.
	 *
	 * @param {Object} options - Options for URL shortening.
	 * @param {string} options.url - The URL to shorten. (Required)
	 * @param {string} options.extension - The custom extension for the shortened URL. (Required)
	 *
	 * @returns {Promise<Object>} - Returns a promise that resolves to the shortened URL information.
	 *
	 * @throws {Error} Throws an error if required parameters are missing or if the API returns an error.
	 *
	 * @example
	 * Shortener.shorten({
	 *   url: "https://example.com",
	 *   extension: "mylink"
	 * });
	 */
	static async shorten({ url, extension }) {
		if (!url)
			throw new Error(
				"[Popcat Wrapper] Shortener.shorten(...) => 'url' parameter is required.",
			);
		if (!extension)
			throw new Error(
				"[Popcat Wrapper] Shortener.shorten(...) => 'extension' parameter is required.",
			);
		const body = {
			full: url,
			extension,
		};
		const res = await fetch(`https://url.popcat.xyz/api/shorten`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		const json = await res.json();
		if (!json || json.error) {
			throw new Error(
				`[Popcat Wrapper] Shortener.shorten(...) => ${json?.error || 'Unknown error occurred'}`,
			);
		}

		return json;
	}

	/**
	 * Gets information about a shortened URL using the popcat URL shortener service.
	 *
	 * @param {Object} options - Options for getting URL info.
	 * @param {string} options.extension - The extension of the shortened URL. (Required)
	 *
	 * @returns {Promise<Object>} - Returns a promise that resolves to the URL information.
	 *
	 * @throws {Error} Throws an error if required parameters are missing or if the API returns an error.
	 *
	 * @example
	 * Shortener.getInfo({
	 *   extension: "mylink"
	 * });
	 */
	static async getInfo({ extension }) {
		if (!extension)
			throw new Error(
				"[Popcat Wrapper] Shortener.getInfo(...) => 'extension' parameter is required.",
			);
		const res = await fetch(
			`https://url.popcat.xyz/api/info?short=${encodeURIComponent(extension)}`,
		);
		const json = await res.json();
		if (!json || json.error)
			throw new Error(
				`[Popcat Wrapper] Shortener.getInfo(...) => ${json?.error || 'Unknown error occurred'}`,
			);
		return json;
	}
}

module.exports = { Shortener };
