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

# Community
<p>Join <a href="https://popcat.xyz/server">Our Server</a> If you want to have fun or need any support!</p>

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y56OOQW)
 
## Installation
```
npm i popcat-wrapper
```

## Examples

### Upload Code To The [CodeBin](https://code.popcat.xyz)
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

### Jokes command, no input example:
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

### Biden command, 1 text input example
```js
const pop = require('popcat-wrapper')
const Discord = require('discord.js')

const text = "String"
const img = await pop.biden(text)
const image = new Discord.MessageAttachment(img, "biden.png")
message.channel.send(image)
```

###  Pooh meme command, more than one text input example
```js
const pop = require('popcat-wrapper')
const Discord = require('discord.js')

const text1 = "String"
const text2 = "String 2"
const img = await pop.pooh(text1, text2)
const image = new Discord.MessageAttachment(img, "pooh.png")
message.channel.send(image)

```

### Drip command, image input example
```js
const Discord = require("discord.js");
const pop = require('popcat-wrapper')

let user = message.mentions.users.first() || message.author
const av = user.displayAvatarURL()

const image = await pop.drip(av)

const attachment = new Discord.MessageAttachment(image, "drip.png");
message.channel.send(attachment);
```

### Color command, object output example:

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
So, if you want to collect for example the rgb, you need to:

`
console.log(output.rgb)
` (gives out the rgb value of 'ffcc99' hex.)

 This method applies for, iTunes, WouldYouRather, RandomMeme, npm, banner, country, weather, github, car, showerthoughts, lyrics and Colorinfo.


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
 - `joke()`
 - `car()`
 - `showerthoughts()`
 - `randommeme()`
 - `randomcolor()`
 - `fact()`
 - `_8ball()`
 - `drake(text1, text2)`
 - `pooh(text1, text2)`
 - `happysad(text1, text2)`
 - `ship(image1, image2)`
 - `quote(background_image, text, author_name)`
 - `colorify(image, color_name)`
 - `biden(text)`
 - `pikachu(text)`
 - `oogway(text)`
 - `drip(image)`
 - `communism(image_url)`
 - `clown(image_url)`
 - `ad(image_url)`
 - `blur(image_url)`
 - `invert(image_url)`
 - `greyscale(image_url)`
 - `jokeoverhead(image_url)`
 - `mnm(image_url)`
 - `whowouldwin(image_url_1, image_url_2)`
 - `opinion(image_url, text)`
 - `wanted(image_url)`
 - `gun(image_url)`
 - `jail(image_url)`
 - `translate(text, to_language)`
 - `reverse(text)`
 - `alert(text)`
 - `caution(text)`
 - `mock(text)`
 - `facts(text)`
 - `encode(text)`
 - `sadcat(text)`
 - `lulcat(text)`
 - `unforgivable(text)`
 - `decode(binary)`
 - `lyrics(song)`
 - `subreddit(subredditName)`
 - `doublestruck(text)`
 - `texttomorse(text)`
 - `github(user_name)`
 - `weather(location_name)`
 - `banner(discord_user_id)`
 - `itunes(song_name)`
 - `country(country_name`
 - `npm(package_name)`
 - `colorinfo(color_hex)`
 - `shorten(url, extension)`
 - `screenshot(url)`
 - `steam(name)`
 - `imdb(moviename)`
 - `welcomecard(background, avatar, text_1, text_2, text_3)`
 - `periodicTable(element_name_symbol_or_number)`



## Credits
Made with ❤ by Zero Two#7177

Join Our Discord Server! [Link](https://popcat.xyz/server)