module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	let totalSeconds = bot.uptime / 1000;
	let days = Math.floor(totalSeconds / 86400);
	let hours = Math.floor(totalSeconds / 3600 - days * 24);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = Math.floor(totalSeconds % 60);

	let uptime = `${days}:${hours}:${minutes}:${seconds}`;
	let commands = getCommands(bot);
	// Code
	let e = new discord.RichEmbed()
		.setTitle(config.info.bot.name + "'s stats")
		.setColor(config.colors.main)
		.setDescription('These are ' + config.info.bot.name + "' stats!")
		.setFooter(`${config.info.bot.name} 2019`);

	// Guild Stats
	e.addField(
		'Guilds',
		`Guilds: ${bot.guilds.size} \nMembers: ${bot.users.size} \nChannels: ${bot.channels.size} \nEmojis: ${bot.emojis.size}`,
		true
	);

	// Bot Stats
	e.addField(
		'Bot',
		`Ping: ${Math.floor(bot.ping)} \nUptime: ${uptime} \n All Commands: ${
			bot.commands.size
		} \nAvailable Commands: ${bot.commands.size -
			commands} \n Removed Commands: ${commands}`,
		true
	);

	// Send Message
	return message.channel.send(e);

	// Functions
	function getCommands(bot) {
		let count = [];
		bot.commands.forEach(cmd => {
			if (
				cmd.config.module.main == 'developer' ||
				cmd.config.module.main == 'music'
			) {
				count.push(cmd);
			} else {
				return;
			}
		});
		return count.length;
	}
};

module.exports.config = {
	cmd: {
		main: 'bot-stats',
		aliases: []
	},
	info: {
		name: 'Bot Stats',
		usage: 'bot-stats',
		aliases: '',
		description: 'Get the stats of the bot'
	},
	module: {
		main: 'information',
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
