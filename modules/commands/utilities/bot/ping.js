module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	// Code
	const e = new discord.RichEmbed()
		.setTitle('🏓 Pong')
		.setColor(config.colors.secondary)
		.setDescription(`Discord API: ${Math.floor(bot.ping)}`);
	return message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'ping',
		aliases: ['latency']
	},
	info: {
		name: 'Ping',
		usage: 'ping',
		aliases: 'latency',
		description: 'Get the ping (time between message) of the bot'
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
