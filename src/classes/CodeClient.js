const fetch = require('../utils/request');

class CodeClient {
	constructor({ key }) {
		if (!key) throw new Error("Usage: new CodeClient({ key: 'your key' })");
		this.key = key;
	}

	/**
	 * Creates a new paste on https://code.popcat.xyz.
	 *
	 * @param {Object} options - Paste options.
	 * @param {string} options.title - Title of the paste. (Required)
	 * @param {string} options.description - Description of the paste. (Required)
	 * @param {string} options.code - The content/code to paste. (Required)
	 * @param {"Active4D"|"All Hallows Eve"|"Amy"|"Birds of Paradise"|"Blackboard"|
	 * "Brilliance Black"|"Brilliance Dull"|"Chrome DevTools"|"Clouds Midnight"|"Clouds"|
	 * "Cobalt"|"Cobalt2"|"Dawn"|"Dominion Day"|"Dracula"|"Dreamweaver"|"Eiffel"|
	 * "Espresso Libre"|"GitHub Dark"|"GitHub Light"|"GitHub"|"IDLE"|"idleFingers"|
	 * "iPlastic"|"Katzenmilch"|"krTheme"|"Kuroir Theme"|"LAZY"|"Merbivore Soft"|
	 * "Merbivore"|"monoindustrial"|"Monokai Bright"|"Monokai"|"Night Owl"|"Nord"|
	 * "Oceanic Next"|"Pastels on Dark"|"Slush and Poppies"|"SpaceCadel"|"Sunburst"|
	 * "Tomorrow"|"Twilight"|"Upstream Sunburst"|"Vibrant Ink"|"Xcode_default"|"Zenburnesque"}
	 * [options.theme='GitHub Dark'] - Optional theme for syntax highlighting.
	 * @param {"JavaScript"|"JSON"|"HTML"|"CSS"|"Markdown"|"PlainText"}
	 * [options.language='PlainText'] - Optional language of the paste.
	 *
	 * @returns {Promise<{ url: string, paste: Object }>} - Returns an object containing:
	 *   - url: The URL of the created paste.
	 *   - paste: The inserted paste object with details.
	 *
	 * @throws {Error} Throws an error if required parameters are missing or if the theme/language is invalid.
	 *
	 * @example
	 * const client = new CodeClient({ key: "your-api-key" });
	 * client.createBin({
	 *   title: "Example Paste",
	 *   description: "An example paste",
	 *   code: "console.log('Hello World');",
	 *   theme: "GitHub Dark",
	 *   language: "JavaScript"
	 * });
	 */

	async createBin({ title, description, code, theme, language }) {
		const allowedLanguages = [
			'JavaScript',
			'JSON',
			'HTML',
			'CSS',
			'Markdown',
			'PlainText',
		];
		const allowedThemes = [
			'Active4D',
			'All Hallows Eve',
			'Amy',
			'Birds of Paradise',
			'Blackboard',
			'Brilliance Black',
			'Brilliance Dull',
			'Chrome DevTools',
			'Clouds Midnight',
			'Clouds',
			'Cobalt',
			'Cobalt2',
			'Dawn',
			'Dominion Day',
			'Dracula',
			'Dreamweaver',
			'Eiffel',
			'Espresso Libre',
			'GitHub Dark',
			'GitHub Light',
			'GitHub',
			'IDLE',
			'idleFingers',
			'iPlastic',
			'Katzenmilch',
			'krTheme',
			'Kuroir Theme',
			'LAZY',
			'Merbivore Soft',
			'Merbivore',
			'monoindustrial',
			'Monokai Bright',
			'Monokai',
			'Night Owl',
			'Nord',
			'Oceanic Next',
			'Pastels on Dark',
			'Slush and Poppies',
			'SpaceCadet',
			'Sunburst',
			'Tomorrow',
			'Twilight',
			'Upstream Sunburst',
			'Vibrant Ink',
			'Xcode_default',
			'Zenburnesque',
		];

		if (!title)
			throw new Error(
				"[Popcat Wrapper] CodeClient.createBin(...) => 'title' parameter is required.",
			);
		if (!description)
			throw new Error(
				"[Popcat Wrapper] CodeClient.createBin(...) => 'description' parameter is required.",
			);
		if (!code)
			throw new Error(
				"[Popcat Wrapper] CodeClient.createBin(...) => 'code' parameter is required.",
			);

		if (
			language &&
			!allowedLanguages.some((l) => l.toLowerCase() === language.toLowerCase())
		) {
			throw new Error(
				`[Popcat Wrapper] CodeClient.createBin(...) => 'language' must be one of ${allowedLanguages.join(', ')}`,
			);
		}

		if (
			theme &&
			!allowedThemes.some((t) => t.toLowerCase() === theme.toLowerCase())
		) {
			throw new Error(
				`[Popcat Wrapper] CodeClient.createBin(...) => 'theme' must be one of ${allowedThemes.join(', ')}`,
			);
		}

		const res = await fetch('https://code.popcat.xyz/api/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				token: this.key,
			},
			body: JSON.stringify({
				title,
				description,
				code,
				theme: theme || 'GitHub Dark',
				language: language || 'PlainText',
			}),
		});

		const json = await res.json();

		if (!json || json.error) {
			throw new Error(
				`[Popcat Wrapper] CodeClient.createBin(...) => ${json?.error || 'Unknown error occurred'}`,
			);
		}

		return json;
	}
}

module.exports = { CodeClient };
