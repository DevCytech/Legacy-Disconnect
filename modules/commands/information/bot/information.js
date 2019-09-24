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
		.setTitle(`About ${config.info.bot.name}`)
		.setColor(config.colors.main)
		.setDescription(config.info.bot.description)
		.addField('Creator', `Name: Cytech | 190612497848336384 | @Cytech#5860`)
		.addField(
			'Stats',
			`${bot.guilds.size} guild(s), ${bot.channels.size} channels, ${
				bot.users.size
			} users, ${bot.commands.size - commands} commands`
		)
		.addField('Uptime', uptime, true)
		.addField('Ping', Math.floor(bot.ping), true);
	if (config.info.links.website.link !== 'Coming Soon!')
		e.addField('Website', config.info.links.website.link, true);
	e.addField('Server', config.info.links.supportServer.link, true)
		.addField('Invite Bot', config.info.links.botInvite.short, true)
		.setFooter(`${config.staff.creator} 2019`);
	message.channel.send(e);
	// Functions
	function getCommands(bot) {
		let count = [];
		bot.commands.forEach(cmd => {
			if (
				cmd.config.module.main == 'developerCommands' ||
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
		main: 'about',
		aliases: ['bot-info', 'bot-information']
	},
	info: {
		name: 'About',
		usage: 'about',
		aliases: 'bot-information',
		description: 'Get information about the bot.'
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
