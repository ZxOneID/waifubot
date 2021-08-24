const { Telegraf, Markup } = require('telegraf')
const axios = require('axios')

const bot = new Telegraf('1974667863:AAFhLfisSpt7erB9ZLrgBjA2DbN9H-ZL-sM')
const start = Markup.inlineKeyboard([
  Markup.button.callback('Menu', 'menu'),
  Markup.button.callback('Owner', 'owner')
])
const menu = Markup.inlineKeyboard([
  Markup.button.callback('Anime', 'anime'),
  Markup.button.callback('NSFW', 'nsfw')
])
bot.command('quit', (ctx) => {
  ctx.telegram.leaveChat(ctx.message.chat.id)
  ctx.leaveChat()
})
bot.start((ctx) => {
   ctx.replyWithPhoto('https://c.top4top.io/p_2060es98d0.jpeg',{caption: `Hello @${ctx.from.username} Welcome To Anime Bot`},start)
})
bot.command('menu',(ctx) => {
	ctx.reply(`Please select the menu below :`,menu)
})
bot.action('menu',(ctx) => {
	ctx.reply(`Please select the menu below :`,menu)
})
bot.command('owner',(ctx) => {
	ctx.reply(`Owner Bot @kok_saya_suka_makan_nasi_ya_hemm`)
})
bot.action('owner',(ctx) => {
	ctx.reply(`Owner Bot @kok_saya_suka_makan_nasi_ya_hemm`)
})
//anime menu
bot.action('anime',(ctx) => {
	ctx.reply(`
> /waifu
> /neko
> /shinobu
> /megumin
> /bully
> /cuddle
> /cry
> /hug
> /awoo
> /kiss
> /lick
> /pat
> /smug
> /bonk
> /yeet
> /blush
> /smile
> /wave
> /highfive
> /handhold
> /nom
> /bite
> /glomp
> /slap
> /kill
> /kick
> /happy
> /wink
> /poke
> /dance
> /cringe`)
})
bot.command('waifu',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/waifu')
	.then(lah => {
		ctx.replyWithPhoto(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('neko',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/neko')
	.then(lah => {
		ctx.replyWithPhoto(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('shinobu',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/shinobu')
	.then(lah => {
		ctx.replyWithPhoto(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('megumin',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/megumin')
	.then(lah => {
		ctx.replyWithPhoto(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('bully',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/bully')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('cuddle',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/cuddle')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('cry',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/cry')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('hug',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/hug')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('awoo',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/awoo')
	.then(lah => {
		ctx.replyWithPhoto(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('kiss',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/kiss')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('lick',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/lick')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('pat',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/pat')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('smug',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/smug')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('bonk',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/bonk')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('yeet',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/yeet')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('blush',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/blush')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('smile',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/smile')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('wave',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/wave')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('highfive',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/highfive')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('handhold',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/handhold')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('nom',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/nom')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('bite',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/bite')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('glomp',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/glomp')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('slap',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/slap')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('kill',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/kill')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('kick',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/kick')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('happy',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/happy')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('wink',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/wink')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('poke',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/poke')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('dance',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/dance')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('cringe',(ctx) => {
	axios.get('https://api.waifu.pics/sfw/cringe')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
//Nsfw Menu
bot.action('nsfw',(ctx) => {
	ctx.reply(`
> /nsfwwaifu
> /nsfwneko
> /trap
> /blowjob`)
})
bot.command('nsfwwaifu',(ctx) => {
	axios.get('https://api.waifu.pics/nsfw/waifu')
	.then(lah => {
		ctx.replyWithPhoto(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('nsfwneko',(ctx) => {
	axios.get('https://api.waifu.pics/nsfw/neko')
	.then(lah => {
		ctx.replyWithPhoto(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('trap',(ctx) => {
	axios.get('https://api.waifu.pics/nsfw/trap')
	.then(lah => {
		ctx.replyWithPhoto(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.command('blowjob',(ctx) => {
	axios.get('https://api.waifu.pics/nsfw/blowjob')
	.then(lah => {
		ctx.replyWithVideo(lah.data.url)
	}).catch(e => {
		ctx.reply('ERROR !')
	})
})
bot.launch()