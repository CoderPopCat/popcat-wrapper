const wrapper = require('../dist/index.cjs');

describe('Popcat Wrapper', () => {
	// Test utility functions
	describe('Utility Functions', () => {
		test('should generate discordMessage URL correctly', () => {
			const url = wrapper.discordMessage({
				username: 'TestUser',
				content: 'This is a test message',
				color: '7289da',
			});

			expect(url).toContain('api.popcat.xyz/v2/discord-message');
			expect(url).toContain('username=TestUser');
			expect(url).toContain('content=This%20is%20a%20test%20message');
			expect(url).toContain('color=7289da');
		});

		test('should throw error if username is missing in discordMessage', () => {
			expect(() => {
				wrapper.discordMessage({
					content: 'This is a test message',
					color: '7289da',
				});
			}).toThrow(
				"[Popcat Wrapper] discordMessage({ username, content, avatar, color, timestamp }) => 'username' parameter is missing.",
			);
		});

		test('should throw error if content is missing in discordMessage', () => {
			expect(() => {
				wrapper.discordMessage({
					username: 'TestUser',
					color: '7289da',
				});
			}).toThrow(
				"[Popcat Wrapper] discordMessage({ username, content, avatar, color, timestamp }) => 'content' parameter is missing.",
			);
		});

		test('should generate couldread URL correctly', () => {
			const url = wrapper.couldread('This is a test text');

			expect(url).toContain('api.popcat.xyz/v2/couldread');
			expect(url).toContain('text=This%20is%20a%20test%20text');
		});

		test('should throw error if text is missing in couldread', () => {
			expect(() => {
				wrapper.couldread();
			}).toThrow(
				"[Popcat Wrapper] couldread(text) => 'text' parameter is missing.",
			);
		});

		test('should generate supreme URL correctly', () => {
			const url = wrapper.supreme('Test text');

			expect(url).toContain('api.popcat.xyz/v2/supreme');
			expect(url).toContain('text=Test%20text');
		});

		test('should throw error if text is missing in supreme', () => {
			expect(() => {
				wrapper.supreme();
			}).toThrow(
				"[Popcat Wrapper] supreme(text) => 'text' parameter is missing.",
			);
		});

		test('should generate quote URL correctly', () => {
			const url = wrapper.quote(
				'https://example.com/image.jpg',
				'Test text',
				'John Doe',
			);

			expect(url).toContain('api.popcat.xyz/v2/quote');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
			expect(url).toContain('text=Test%20text');
			expect(url).toContain('name=John%20Doe');
		});

		test('should throw error if any parameter is missing in quote', () => {
			expect(() => {
				wrapper.quote(null, 'Test text', 'John Doe');
			}).toThrow(
				"[Popcat Wrapper] quote(image, text, name) => Either 'image', 'text' or 'name' parameter is missing.",
			);

			expect(() => {
				wrapper.quote('https://example.com/image.jpg', null, 'John Doe');
			}).toThrow(
				"[Popcat Wrapper] quote(image, text, name) => Either 'image', 'text' or 'name' parameter is missing.",
			);

			expect(() => {
				wrapper.quote('https://example.com/image.jpg', 'Test text', null);
			}).toThrow(
				"[Popcat Wrapper] quote(image, text, name) => Either 'image', 'text' or 'name' parameter is missing.",
			);
		});

		test('should throw error if text length is invalid in quote', () => {
			const error = wrapper.quote(
				'https://example.com/image.jpg',
				'a'.repeat(126),
				'John Doe',
			);
			expect(error).toBeInstanceOf(Error);
			expect(error.message).toContain('must be between 1-125 characters');
		});

		test('should generate happysad URL correctly', async () => {
			const url = await wrapper.happysad('Text 1', 'Text 2');

			expect(url).toContain('api.popcat.xyz/v2/happysad');
			expect(url).toContain('text1=Text%201');
			expect(url).toContain('text2=Text%202');
		});

		test('should throw error if any parameter is missing in happysad', async () => {
			await expect(wrapper.happysad()).rejects.toThrow(
				"[Popcat Wrapper] happysad(text1, text2) => Either 'text1' or 'text2' parameter is missing.",
			);
			await expect(wrapper.happysad('Text 1')).rejects.toThrow(
				"[Popcat Wrapper] happysad(text1, text2) => Either 'text1' or 'text2' parameter is missing.",
			);
		});

		test('should generate communism URL correctly', async () => {
			const url = await wrapper.communism('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/communism');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if imageURL is missing in communism', async () => {
			await expect(wrapper.communism()).rejects.toThrow(
				"[Popcat Wrapper] communism(image) => 'imageURL' parameter is missing.",
			);
		});

		test('should generate jail URL correctly', () => {
			const url = wrapper.jail('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/jail');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if imageURL is missing in jail', () => {
			expect(() => {
				wrapper.jail();
			}).toThrow(
				"[Popcat Wrapper] jail(imageURL) ==> 'imageURL' parameter is missing.",
			);
		});

		test('should generate unforgivable URL correctly', () => {
			const url = wrapper.unforgivable('Test text');

			expect(url).toContain('api.popcat.xyz/v2/unforgivable');
			expect(url).toContain('text=Test%20text');
		});

		test('should throw error if text is missing in unforgivable', () => {
			expect(() => {
				wrapper.unforgivable();
			}).toThrow(
				"[Popcat Wrapper] unforgivable(text) ==> 'text' parameter is missing.",
			);
		});

		test('should generate drake URL correctly', () => {
			const url = wrapper.drake('Text 1', 'Text 2');

			expect(url).toContain('api.popcat.xyz/v2/drake');
			expect(url).toContain('text1=Text%201');
			expect(url).toContain('text2=Text%202');
		});

		test('should throw error if any parameter is missing in drake', () => {
			expect(() => {
				wrapper.drake();
			}).toThrow('The field text1 was left empty in the drake function');

			expect(() => {
				wrapper.drake('Text 1');
			}).toThrow('The field text2 was left empty in the drake function');
		});

		test('should generate pooh URL correctly', () => {
			const url = wrapper.pooh('Text 1', 'Text 2');

			expect(url).toContain('api.popcat.xyz/v2/pooh');
			expect(url).toContain('text1=Text%201');
			expect(url).toContain('text2=Text%202');
		});

		test('should throw error if any parameter is missing in pooh', () => {
			expect(() => {
				wrapper.pooh();
			}).toThrow('The field text1 was left empty in the pooh function');

			expect(() => {
				wrapper.pooh('Text 1');
			}).toThrow('The field text2 was left empty in the pooh function');
		});

		test('should generate ship URL correctly', () => {
			const url = wrapper.ship(
				'https://example.com/image1.jpg',
				'https://example.com/image2.jpg',
			);

			expect(url).toContain('api.popcat.xyz/v2/ship');
			expect(url).toContain('user1=https%3A%2F%2Fexample.com%2Fimage1.jpg');
			expect(url).toContain('user2=https%3A%2F%2Fexample.com%2Fimage2.jpg');
		});

		test('should throw error if any parameter is missing in ship', () => {
			expect(() => {
				wrapper.ship();
			}).toThrow(
				'The field image1 was left empty in the ship function. Need help? https://dsc.gg/popcatcom',
			);

			expect(() => {
				wrapper.ship('https://example.com/image1.jpg');
			}).toThrow(
				'The field image2 was left empty in the ship function. Need help? https://dsc.gg/popcatcom',
			);
		});

		test('should generate colorify URL correctly', () => {
			const url = wrapper.colorify('https://example.com/image.jpg', '#FF0000');

			expect(url).toContain('api.popcat.xyz/v2/colorify');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
			expect(url).toContain('color=%23FF0000');
		});

		test('should throw error if any parameter is missing in colorify', () => {
			expect(() => {
				wrapper.colorify();
			}).toThrow(
				"[Popcat Wrapper] The field 'image' was left empty in the colorify function. Need help? https://dsc.gg/popcatcom",
			);

			expect(() => {
				wrapper.colorify('https://example.com/image.jpg');
			}).toThrow(
				"[Popcat Wrapper] The field 'color' was left empty in the colorify function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate biden URL correctly', () => {
			const url = wrapper.biden('Test text');

			expect(url).toContain('api.popcat.xyz/v2/biden');
			expect(url).toContain('text=Test%20text');
		});

		test('should throw error if text is missing in biden', () => {
			expect(() => {
				wrapper.biden();
			}).toThrow(
				"[Popcat Wrapper] The field 'text' was left empty in the biden function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate pikachu URL correctly', () => {
			const url = wrapper.pikachu('Test text');

			expect(url).toContain('api.popcat.xyz/v2/pikachu');
			expect(url).toContain('text=Test%20text');
		});

		test('should throw error if text is missing in pikachu', () => {
			expect(() => {
				wrapper.pikachu();
			}).toThrow(
				"[Popcat Wrapper] The field 'text' was left empty in the pikachu function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate drip URL correctly', () => {
			const url = wrapper.drip('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/drip');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if image is missing in drip', () => {
			expect(() => {
				wrapper.drip();
			}).toThrow(
				"[Popcat Wrapper] The field 'image' was left empty in the drip function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate clown URL correctly', () => {
			const url = wrapper.clown('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/clown');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if image is missing in clown', () => {
			expect(() => {
				wrapper.clown();
			}).toThrow(
				"[Popcat Wrapper] The field 'image' was left empty in the clown function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate alert URL correctly', () => {
			const url = wrapper.alert('Test text');

			expect(url).toContain('api.popcat.xyz/v2/alert');
			expect(url).toContain('text=Test%20text');
		});

		test('should throw error if text is missing in alert', () => {
			expect(() => {
				wrapper.alert();
			}).toThrow(
				"[Popcat Wrapper] The field 'text' was left empty in the alert function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate caution URL correctly', () => {
			const url = wrapper.caution('Test text');

			expect(url).toContain('api.popcat.xyz/v2/caution');
			expect(url).toContain('text=Test%20text');
		});

		test('should throw error if text is missing in caution', () => {
			expect(() => {
				wrapper.caution();
			}).toThrow(
				"[Popcat Wrapper] The field 'text' was left empty in the caution function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate jokeoverhead URL correctly', () => {
			const url = wrapper.jokeoverhead('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/jokeoverhead');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if image is missing in jokeoverhead', () => {
			expect(() => {
				wrapper.jokeoverhead();
			}).toThrow(
				"[Popcat Wrapper] The field 'image' was left empty in the jokeoverhead function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate mnm URL correctly', () => {
			const url = wrapper.mnm('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/mnm');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if image is missing in mnm', () => {
			expect(() => {
				wrapper.mnm();
			}).toThrow(
				"[Popcat Wrapper] The field 'image' was left empty in the mnm function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate uncover URL correctly', () => {
			const url = wrapper.uncover('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/uncover');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if image is missing in uncover', () => {
			expect(() => {
				wrapper.uncover();
			}).toThrow(
				"[Popcat Wrapper] The field 'image' was left empty in the uncover function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate ad URL correctly', () => {
			const url = wrapper.ad('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/ad');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if image is missing in ad', () => {
			expect(() => {
				wrapper.ad();
			}).toThrow(
				"[Popcat Wrapper] The field 'image' was left empty in the ad function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate blur URL correctly', () => {
			const url = wrapper.blur('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/blur');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if image is missing in blur', () => {
			expect(() => {
				wrapper.blur();
			}).toThrow(
				"[Popcat Wrapper] The field 'image' was left empty in the blur function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate invert URL correctly', () => {
			const url = wrapper.invert('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/invert');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if image is missing in invert', () => {
			expect(() => {
				wrapper.invert();
			}).toThrow(
				"[Popcat Wrapper] The field 'image' was left empty in the invert function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should generate greyscale URL correctly', () => {
			const url = wrapper.greyscale('https://example.com/image.jpg');

			expect(url).toContain('api.popcat.xyz/v2/greyscale');
			expect(url).toContain('image=https%3A%2F%2Fexample.com%2Fimage.jpg');
		});

		test('should throw error if image is missing in greyscale', () => {
			expect(() => {
				wrapper.greyscale();
			}).toThrow(
				"[Popcat Wrapper] The field 'image' was left empty in the greyscale function. Need help? https://dsc.gg/popcatcom",
			);
		});
	});

	// Test CodeClient class
	describe('CodeClient Class', () => {
		test('should throw error if no key is provided to CodeClient', () => {
			expect(() => {
				new wrapper.CodeClient({});
			}).toThrow("Usage: new CodeClient({ key: 'your key' })");
		});

		test('should create CodeClient instance with valid key', () => {
			const client = new wrapper.CodeClient({ key: 'test-key' });
			expect(client.key).toBe('test-key');
		});

		test('should validate required parameters in createBin', async () => {
			const client = new wrapper.CodeClient({ key: 'test-key' });

			await expect(client.createBin({})).rejects.toThrow(
				"'title' parameter is required.",
			);
			await expect(client.createBin({ title: 'Test' })).rejects.toThrow(
				"'description' parameter is required.",
			);
			await expect(
				client.createBin({ title: 'Test', description: 'Description' }),
			).rejects.toThrow("'code' parameter is required.");
		});

		test('should validate language parameter in createBin', async () => {
			const client = new wrapper.CodeClient({ key: 'test-key' });

			await expect(
				client.createBin({
					title: 'Test',
					description: 'Description',
					code: 'console.log("hello");',
					language: 'InvalidLanguage',
				}),
			).rejects.toThrow("language' must be one of");
		});

		test('should validate theme parameter in createBin', async () => {
			const client = new wrapper.CodeClient({ key: 'test-key' });

			await expect(
				client.createBin({
					title: 'Test',
					description: 'Description',
					code: 'console.log("hello");',
					theme: 'InvalidTheme',
				}),
			).rejects.toThrow("theme' must be one of");
		});
	});

	// Test Shortener class
	describe('Shortener Class', () => {
		test('should validate required parameters in shorten', async () => {
			await expect(wrapper.Shortener.shorten({})).rejects.toThrow(
				"'url' parameter is required.",
			);
			await expect(
				wrapper.Shortener.shorten({ url: 'https://example.com' }),
			).rejects.toThrow("'extension' parameter is required.");
		});

		test('should validate required parameters in getInfo', async () => {
			await expect(wrapper.Shortener.getInfo({})).rejects.toThrow(
				"'extension' parameter is required.",
			);
		});
	});

	// Test async functions
	describe('Async Functions', () => {
		test('should handle randomcolor function', async () => {
			// This test would require mocking the fetch call
			// For now, we'll just check that the function exists
			expect(typeof wrapper.randomcolor).toBe('function');
		});

		test('should validate required parameters in periodicTable', async () => {
			await expect(wrapper.periodicTable()).rejects.toThrow(
				"element' parameter is missing.",
			);
		});

		test('should validate required parameters in imdb', async () => {
			await expect(wrapper.imdb()).rejects.toThrow(
				"name' parameter is missing",
			);
		});

		test('should validate required parameters in steam', async () => {
			await expect(wrapper.steam()).rejects.toThrow(
				"name' parameter is missing.",
			);
		});

		test('should validate required parameters in screenshot', async () => {
			await expect(wrapper.screenshot()).rejects.toThrow(
				"url' parameter is missing.",
			);
		});

		test('should validate required parameters in lyrics', async () => {
			await expect(wrapper.lyrics()).rejects.toThrow(
				"The field 'song' was left empty int he LYRICS function!",
			);
		});

		test('should validate required parameters in subreddit', async () => {
			await expect(wrapper.subreddit()).rejects.toThrow(
				"The field 'subeddit' was left empty in the SUBREDDIT function!",
			);
		});

		test('should validate required parameters in oogway', () => {
			expect(() => {
				wrapper.oogway();
			}).toThrow("The field 'text' was left empty in the OOGWAY function!");
		});

		test('should validate required parameters in opinion', () => {
			expect(() => {
				wrapper.opinion();
			}).toThrow("The field 'image' was left empty in the OPINION function!");

			expect(() => {
				wrapper.opinion('https://example.com/image.jpg');
			}).toThrow("The field 'text' was left empty in the OPINION function!");
		});

		test('should validate required parameters in wanted', () => {
			expect(() => {
				wrapper.wanted();
			}).toThrow("The field 'image' was left empty in the WANTED function!");
		});

		test('should validate required parameters in sadcat', () => {
			expect(() => {
				wrapper.sadcat();
			}).toThrow(
				"The field 'text' was left empty in the SAD CAT function. Need help? https://popcat.xyz/server",
			);
		});

		test('should validate required parameters in github', async () => {
			await expect(wrapper.github()).rejects.toThrow(
				"The field 'username' was left empty in the GITHUB function!",
			);
		});

		test('should validate required parameters in weather', async () => {
			await expect(wrapper.weather()).rejects.toThrow(
				"The field 'place' was left empty in the WEATHER function!",
			);
		});

		test('should validate required parameters in lulcat', async () => {
			await expect(wrapper.lulcat()).rejects.toThrow(
				"The field 'text' was left empty in the LUL CAT function. Need help? https://popcat.xyz/server",
			);
		});

		test('should validate required parameters in gun', () => {
			expect(() => {
				wrapper.gun();
			}).toThrow("The field 'image' was left empty in the GUN function!");
		});

		test('should validate required parameters in country', async () => {
			await expect(wrapper.country()).rejects.toThrow(
				"The field 'country name' was left empty in the COUNTRY function!",
			);
		});

		test('should validate required parameters in npm', async () => {
			await expect(wrapper.npm()).rejects.toThrow(
				"The field 'package name' was left empty in the NPM function!",
			);
		});

		test('should validate required parameters in translate', async () => {
			await expect(wrapper.translate()).rejects.toThrow(
				"The field 'text' was left empty in the translate function. Need help? https://dsc.gg/popcatcom",
			);
			await expect(wrapper.translate('Hello')).rejects.toThrow(
				"The field 'to' was left empty in the translate function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should validate required parameters in reverse', async () => {
			await expect(wrapper.reverse()).rejects.toThrow(
				"The field 'text' was left empty in the reverse function",
			);
		});

		test('should validate required parameters in colorinfo', async () => {
			await expect(wrapper.colorinfo()).rejects.toThrow(
				"The field 'color' was left empty in the colorinfo function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should validate required parameters in mock', async () => {
			await expect(wrapper.mock()).rejects.toThrow(
				"The field 'text' was left empty in the mock function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should validate required parameters in doublestruck', async () => {
			await expect(wrapper.doublestruck()).rejects.toThrow(
				"The field 'text' was left empty in the doublestruck function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should validate required parameters in texttomorse', async () => {
			await expect(wrapper.texttomorse()).rejects.toThrow(
				"The field 'text' was left empty in the texttomorse function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should validate required parameters in welcomecard', () => {
			expect(() => {
				wrapper.welcomecard();
			}).toThrow(
				'welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> background is null.',
			);

			expect(() => {
				wrapper.welcomecard('https://example.com/background.png');
			}).toThrow(
				'welcomecard(background, avatar, text_1, text_2, text_3) ==> avatar is null',
			);

			expect(() => {
				wrapper.welcomecard(
					'https://example.com/background.png',
					'https://example.com/avatar.jpg',
				);
			}).toThrow(
				'welcomecard(background, avatar, text_1, text_2, text_3) ==> text_1 is null',
			);

			expect(() => {
				wrapper.welcomecard(
					'https://example.com/background.png',
					'https://example.com/avatar.jpg',
					'Text 1',
				);
			}).toThrow(
				'welcomecard(background, avatar, text_1, text_2, text_3) ==> text_2 is null',
			);

			expect(() => {
				wrapper.welcomecard(
					'https://example.com/background.png',
					'https://example.com/avatar.jpg',
					'Text 1',
					'Text 2',
				);
			}).toThrow(
				'welcomecard(background, avatar, text_1, text_2, text_3) ==> text_3 is null',
			);
		});

		test('should validate background URL in welcomecard', () => {
			expect(() => {
				wrapper.welcomecard(
					'invalid-url',
					'https://example.com/avatar.jpg',
					'Text 1',
					'Text 2',
					'Text 3',
				);
			}).toThrow(
				'welcomecard(background, avatar, text_1, text_2, text_3) ==> background must be a valid URL.',
			);
		});

		test('should validate background file type in welcomecard', () => {
			expect(() => {
				wrapper.welcomecard(
					'https://example.com/background.jpg',
					'https://example.com/avatar.jpg',
					'Text 1',
					'Text 2',
					'Text 3',
				);
			}).toThrow(
				'welcomecard(background, avatar, text_1, text_2, text_3) ==> background must be a PNG.',
			);
		});

		test('should validate required parameters in itunes', async () => {
			await expect(wrapper.itunes()).rejects.toThrow(
				"The field 'song' was left empty in the iTunes function.",
			);
		});

		test('should validate required parameters in chatbot', async () => {
			await expect(wrapper.chatbot()).rejects.toThrow(
				"The field 'content' was left empty in the chatbot function.",
			);
			await expect(wrapper.chatbot('Hello')).rejects.toThrow(
				"The field 'ownername' was left empty in the chatbot function.",
			);
			await expect(wrapper.chatbot('Hello', 'Owner')).rejects.toThrow(
				"The field 'botname' was left empty in the chatbot function.",
			);
		});

		test('should validate required parameters in encode', async () => {
			await expect(wrapper.encode()).rejects.toThrow(
				"The field 'text' was left empty in the encode function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should validate required parameters in decode', async () => {
			await expect(wrapper.decode()).rejects.toThrow(
				"The field 'binary' was left empty in the decode function. Need help? https://dsc.gg/popcatcom",
			);
		});

		test('should validate required parameters in facts', async () => {
			await expect(wrapper.facts()).rejects.toThrow(
				"The field 'text' was left empty in the facts functuion.",
			);
		});

		test('should handle car function', async () => {
			expect(typeof wrapper.car).toBe('function');
		});

		test('should handle showerthought function', async () => {
			expect(typeof wrapper.showerthought).toBe('function');
		});

		test('should handle randommeme function', async () => {
			expect(typeof wrapper.randommeme).toBe('function');
		});

		test('should handle wouldyourather function', async () => {
			expect(typeof wrapper.wouldyourather).toBe('function');
		});

		test('should handle _8ball function', async () => {
			expect(typeof wrapper._8ball).toBe('function');
		});

		test('should generate discordMessage URL correctly', () => {
			const discordMessage = wrapper.discordMessage({
				username: 'TestUser',
				content: 'This is a test message',
				color: '7289da',
			});

			expect(discordMessage).toContain('api.popcat.xyz/v2/discord-message');
			expect(discordMessage).toContain('username=TestUser');
			expect(discordMessage).toContain(
				'content=This%20is%20a%20test%20message',
			);
			expect(discordMessage).toContain('color=7289da');
		});
	});
});
