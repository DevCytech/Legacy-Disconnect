module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, errorWarn, superagent } = tools;

	// Code
	if (message.channel.nsfw == true) {
		superagent
			.get('https://nekobot.xyz/api/image')
			.query({ type: 'hthigh' })
			.end((err, res) => {
				const e = new discord.RichEmbed()
					.setImage(res.body.message)
					.setColor(config.colors.secondary);
				return message.channel.send(e);
			});
	} else {
		return errorWarn(
			message,
			'This command can only be used in a NSFW marked channel.'
		);
	}
};

module.exports.config = {
	cmd: {
		main: 'hentai-thighs',
		aliases: ['hentai-thigh', 'thigh-hentai', 'thighs-hentai']
	},
	info: {
		name: 'Hentai Thighs',
		usage: 'hentai-thighs',
		aliases: 'thigh-hentai',
		description: 'Get a random picture of hentai thighs.'
	},
	module: {
		main: 'NSFW',
		sub: 'hentai'
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
