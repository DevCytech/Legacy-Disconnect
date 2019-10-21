module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = bot.tools;
	// Code
	const e = new discord.RichEmbed()
		.setTitle(`About ${config.info.bot.name}`)
		.setColor(config.colors.main)
		.setDescription(config.info.bot.description)
		.addField('Creator', 'Cytech#5680 // 190612497848336384', true)
		.addField(
			'Bot Info',
			`ID: ${bot.user.id}, V${config.settings.version}`,
			true
		)
		.addField(
			'Bot Links',
			`[Support Server](${config.info.links.supportServer.link}), [Invite Bot](${config.info.links.botInvite.short})`
		)
		.addField(
			'Support Links',
			`[Up Vote](${config.info.links.support.discordBots})`
		)
		.setFooter(
			`Disconnect 2019 // For bot stats use ${data.guild.main.prefix}stats`
		);
	message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'about',
		aliases: ['bot-info', 'bot-information']
	},
	info: {
		name: 'About',
		usage: 'about',
		aliases: 'bot-info',
		description: 'Get information about Disconnect.'
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
