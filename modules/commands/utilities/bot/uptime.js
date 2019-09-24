module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, getUptime, config } = tools;
	// Code
	const e = new discord.RichEmbed()
		.setTitle(`${config.info.bot.name}'s uptime`)
		.setColor(config.colors.secondary)
		.setDescription(`${getUptime(bot)}`);
	message.channel.send(e);
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
		aliases: 'uptime',
		description: 'Get the uptime (online time) of the bot'
	},
	module: {
		main: 'utility',
		sub: 'bot'
	},
	settings: {
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
