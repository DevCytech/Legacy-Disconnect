module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, getUptime } = tools;
	// Code
	const e = new discord.RichEmbed()
		.setTitle(`${config.info.bot.name}'s Uptime`)
		.setColor(config.colors.secondary)
		.setDescription(getUptime(bot));
	return message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'uptime',
		aliases: ['up']
	},
	info: {
		name: 'Uptime',
		usage: 'uptime',
		aliases: 'up',
		description: 'Get the uptime of Disconnect.'
	},
	module: {
		main: 'utility',
		sub: 'bot'
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
