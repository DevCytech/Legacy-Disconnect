module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;

	// Code
	const e = new discord.RichEmbed()
		.setTitle(`${config.info.bot.name}'s Ping`)
		.setColor(config.colors.secondary)
		.setDescription(`🏓 Pong... Discord Latency: \`${Math.floor(bot.ping)}\``);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'ping',
		aliases: []
	},
	info: {
		name: 'Ping',
		usage: 'ping',
		aliases: '',
		description: 'Get the ping (latency) of the bot.'
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
