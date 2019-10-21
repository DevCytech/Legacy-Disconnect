module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent
		.get('https://nekobot.xyz/api/image')
		.query({ type: 'kanna' });
	const e = new discord.RichEmbed()
		.setTitle('Kanna!')
		.setColor(config.colors.secondary)
		.setImage(image.body.message);
	message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'kanna',
		aliases: []
	},
	info: {
		name: 'Kanna',
		usage: 'kanna',
		aliases: '',
		description:
			'Get a random image of Kobayashi Kanna from Kobayashi-san Chi no Maid Dragon: Kanna no Nichijou.'
	},
	module: {
		main: 'images',
		sub: 'regular'
	},
	settings: {
		dm: false,
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
