module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, fs } = bot.tools;
	// Code
	const e = new discord.RichEmbed()
		.setTitle(`${config.info.bot.name}'s Stats`)
		.setColor(config.colors.main)
		.setDescription(
			'These stats are true for the moment and may change at any point and time.'
		)
		.addField('Version', `V${config.settings.version}`, true)
		.addField('Guilds', parseInt(bot.guilds.size).toLocaleString(), true)
		.addField('Channels', parseInt(bot.channels.size).toLocaleString(), true)
		.addField('Users', parseInt(bot.users.size).toLocaleString(), true)
		.addField('Emojis', parseInt(bot.emojis.size).toLocaleString(), true)
		.addField('Commands', parseInt(bot.commands.size).toLocaleString(), true);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'stats',
		aliases: ['bot-stats']
	},
	info: {
		name: 'Stats',
		usage: 'stats',
		aliases: 'bot-stats',
		description: 'Get stats of multiple things Disconnect Related.'
	},
	module: {
		main: 'information',
		sub: 'bot'
	},
	settings: {
		dm: true,
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
