module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, errorWarn, superagent } = tools;

	// Code
	if (message.channel.nsfw == true) {
		superagent.get('http://api.oboobs.ru/boobs/0/1/random').end((err, res) => {
			const e = new discord.RichEmbed()
				.setImage(`http://media.oboobs.ru/${res.body[0].preview}`)
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
		main: 'boobs',
		aliases: ['tits', 'tities']
	},
	info: {
		name: 'Boobs',
		usage: 'boobs',
		aliases: 'tits',
		description: 'Get a random picture of boobs.'
	},
	module: {
		main: 'NSFW',
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
