module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	// Code
	const e = new discord.RichEmbed()
		.setTitle(`${config.info.bot.name}'s Help`)
		.setDescription(`${config.info.bot.description}`)
		.setThumbnail(bot.user.avatarURL)
		.setColor(config.colors.main)
		.addField(
			'Help',
			`Thank you for using the Disconnect help command. You may use the \`${data.guild.main.prefix}command-list\` to get all the commands on the bot. To get information about certain modules you may use \`${data.guild.main.prefix}modules\` to get all the modules and run \`${data.guild.main.prefix}modules <module_name>\` to get the commands for a certain module.`
		)
		.addField(
			'Quick Links',
			`[Support Server](${config.info.links.supportServer.link})\n[Invite Bot](${config.info.links.botInvite.short})`,
			true
		)
		.addField(
			'Help Commands',
			`\n - help\n - command-list\n - command-information`,
			true
		);
	return message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'help',
		aliases: []
	},
	info: {
		name: 'Help',
		usage: 'help',
		aliases: '',
		description: 'Get help with Disconnect.'
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
