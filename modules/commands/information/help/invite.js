module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const {discord,config} = tools
	// Code
	const e = new discord.RichEmbed()
		.setColor(config.colors.main)
	
	if (message.member.hasPermission('CREATE_INSTANT_INVITE') && bot.member.hasPermission('CREATE_INSTANT_INVITE') {
	    e.addField('Server Invite', `This is your servers invite link: ${getInvite().link}`)
	}
	e.addField('Bot Invite Link', `Invite the bot [here](${config.info.links.botInvite.short}): ${config.info.links.botInvite.short}`)
	e.addField('Bot Support Server', `Join our support server [here](${config.info.links.supportServer.link}): ${config.info.links.supportServer.link} or use code \`${${config.info.links.supportServer.code}}\``)	

	return message.channel.send(e)
	// Functions
	function getInvite() {}
};

module.exports.config = {
	cmd: {
		main: 'invite',
		aliases: []
	},
	info: {
		name: 'Invite',
		usage: 'invite',
		aliases: '',
		description: 'Get a invite link for your server and a '
	},
	module: {
		main: '',
		sub: ''
	},
	settings: {
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES', 'EMBED_LINKS'],
			user: []
		}
	}
};
