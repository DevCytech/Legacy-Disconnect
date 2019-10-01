module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, isgd, improperUsageWarn } = tools;
	// Code
	if (!args[0]) {
		return improperUsageWarn('link-shorten', message, data);
	} else {
		isgd.shorten(args[0], function(res) {
			if (res.startsWith(`Error:`)) {
				return improperUsageWarn('link-shorten', message, data);
			}
			const e = new discord.RichEmbed()
				.setTitle('Link Shorten!')
				.setDescription(`Your new link has been created: **<${res}>**`)
				.setColor(config.colors.regular);
			return message.channel.send(e);
		});
	}
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'link-shorten',
		aliases: ['shorten']
	},
	info: {
		name: 'Link Shortener',
		usage: 'link-shorten <link>',
		aliases: 'shorten',
		description: 'Provides a link to be shortened by is.gd.'
	},
	module: {
		main: 'utility',
		sub: 'tool'
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
