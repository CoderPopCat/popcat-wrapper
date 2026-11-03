<div align="center">
  <h1>PopCat-Wrapper</h1>
  <p>
    <a href="https://www.npmjs.com/package/popcat-wrapper"><img src="https://img.shields.io/npm/v/popcat-wrapper?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/popcat-wrapper"><img src="https://img.shields.io/npm/dt/popcat-wrapper?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/popcat-wrapper"><img src="https://nodei.co/npm/popcat-wrapper.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

## Community
<p>Join <a href="https://popcat.xyz/server">Our Server</a> If you want to have fun or need any support!</p>

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y56OOQW)
 
## Installation
```
npm i popcat-wrapper
```

## Examples

### Upload Code to the [CodeBin](https://code.popcat.xyz)
```js
const { CodeClient } = require('popcat-wrapper');
const codebin = new CodeClient({ key: 'your-secret-key' });

(async () => { // Can be in any async function
    const paste = await codebin.createBin({
        title: 'Pop Cat',
        description: 'Best code ever',
        code: 'console.log("pop pop")',
        language: 'JavaScript',
        theme: 'Cobalt2'
    });
    console.log(paste);
    // Example:
    // {
    //   url: 'https://code.popcat.xyz/abc123',
    //   paste: {
    //     name: 'abc123',
    //     title: 'Pop Cat',
    //     description: 'Best code ever',
    //     code: 'console.log("pop pop")',
    //     language: 'JavaScript',
    //     theme: 'Cobalt2',
    //     time: 1691234567890
    //   }
    // }

})();
```
### Supported Languages
- **JavaScript**  
- **JSON**  
- **HTML**  
- **CSS**  
- **Markdown**  
- **PlainText**  

### Supported Themes
[View all themes](https://code.popcat.xyz/Cm0rdDoNx)  

### Getting an API Key
Get your key from the [PopCat Discord Server](https://popcat.xyz/server) 🔑  


### Shorten a URL With [PopCat URL Shortener](https://url.popcat.xyz)
```js
const { Shortener } = require('popcat-wrapper');
(async () => {// Async function
  // Shorten a URL
  const shortened = await Shortener.shorten({
    url: 'https://your-url.com',
    extension: 'example-endpoint'
  });
  console.log(shortened);
  // {
  //   short: 'https://url.popcat.xyz/example-endpoint',
  //   full: 'https://your-url.com',
  //   clicks: 0
  // }

  // Get a URL
  const url = await Shortener.getInfo({ extension: 'pop' });
  // {
  //   short: 'https://url.popcat.xyz/pop',
  //   full: 'https://api.popcat.xyz',
  //   clicks: 12,
  //   date: '2025-08-22T08:35:25.000Z'
  // }
})();
```

### Jokes Command (No Input Example)
```js
const pop = require("popcat-wrapper")
const Discord = require("discord.js")
const client = new Discord.Client()

client.on("message", async message => {
if (message.content.toLowerCase() === ">joke") {
  const joke = await pop.joke()
  message.channel.send(joke)
}
})

client.login("bot token")

```

### Biden Command (Single Text Input Example)
```js
const pop = require('popcat-wrapper')
const Discord = require('discord.js')

const text = "String"
const img = await pop.biden(text)
const image = new Discord.MessageAttachment(img, "biden.png")
message.channel.send(image)
```

###  Pooh Meme Command (More Than One Text Input Example)
```js
const pop = require('popcat-wrapper')
const Discord = require('discord.js')

const text1 = "String"
const text2 = "String 2"
const img = await pop.pooh(text1, text2)
const image = new Discord.MessageAttachment(img, "pooh.png")
message.channel.send(image)

```

### Drip Command (Image Input Example)
```js
const Discord = require("discord.js");
const pop = require('popcat-wrapper')

let user = message.mentions.users.first() || message.author
const av = user.displayAvatarURL()

const image = await pop.drip(av)

const attachment = new Discord.MessageAttachment(image, "drip.png");
message.channel.send(attachment);
```

### Color Command (Object Output Example)

```js
const pop = require("popcat-wrapper")

const color = "ffcc99"
const output = await pop.colorinfo(color)
console.log(output)
 /**
 {
 "hex": "#ffcc99",
 "name": "Peach Orange",
 "rgb": "rgb(255,204,153)",
 "color_image": "https://api.popcat.xyz/color/image/ffcc99",
 "brightened": "#ffe6cc"
}*/
```
If you want to get a specific property you have to use `console.log(output.<property_name>)`.    
For example: If you want the RGB value, use `console.log(output.rgb)` (which returns `"rgb(255,204,153)"`).

This method also applies to, `iTunes`, `WouldYouRather`, `RandomMeme`, `npm`, `banner`, `country`, `weather`, `github`, `car`, `showerthoughts`, `lyrics and Colorinfo`.


### Welcome Card

```js
const pop = require('popcat-wrapper')
const Discord = require("discord.js")
const image = await pop.welcomecard(background, avatar, text_1, text_2, text_3)
const attachment = new Discord.MessageAttachment(image, "welcomecard.png")
<Channel>.send(attachment)
```

## Endpoints
You can get a full list of the possible API endpoints [Here](https://api.popca.xyz)
But here is the list:
- `_8ball()`
- `ad(image_url)`
- `alert(text)`
- `biden(text)`
- `blur(image_url)`
- `car()`
- `caution(text)`
- `clown(image_url)`
- `colorify(image, color_name)`
- `colorinfo(color_hex)`
- `communism(image_url)`
- `couldread(text)`
- `country(country_name)`
- `decode(binary)`
- `discordMessage({ username, content, avatar, color, timestamp })`  // avatar, color, timestamp are optional
- `doublestruck(text)`
- `drake(text1, text2)`
- `drip(image)`
- `encode(text)`
- `fact()`
- `facts(text)`
- `github(user_name)`
- `greyscale(image_url)`
- `gun(image_url, text)` (text is optional)
- `happysad(text1, text2)`
- `imdb(moviename)`
- `invert(image_url)`
- `itunes(song_name)`
- `jail(image_url)`
- `joke()`
- `jokeoverhead(image_url)`
- `lulcat(text)`
- `lyrics(song)`
- `mnm(image_url)`
- `mock(text)`
- `npm(package_name)`
- `oogway(text)`
- `opinion(image_url, text)`
- `periodicTable(element_name_symbol_or_number)`
- `pikachu(text)`
- `pooh(text1, text2)`
- `quote(background_image, text, author_name)`
- `randomcolor()`
- `randommeme()`
- `reverse(text)`
- `sadcat(text)`
- `screenshot(url)`
- `ship(image1, image2)`
- `showerthoughts()`
- `steam(name)`
- `subreddit(subredditName)`
- `supreme(text)`
- `texttomorse(text)`
- `translate(text, to_language)`
- `unforgivable(text)`
- `wanted(image_url)`
- `weather(location_name)`
- `welcomecard(background, avatar, text_1, text_2, text_3)`
- `whowouldwin(image_url_1, image_url_2)`



## Credits
Made with ❤ by zerotwo._02 on Discord

Join Our Discord Server! [Link](https://popcat.xyz/server)
