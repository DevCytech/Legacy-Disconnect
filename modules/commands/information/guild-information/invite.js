module.exports.run = async (bot, message, args, tools, data) => {
	// Functions
	async function getInvite() {
		let invite = await message.channel.createInvite({
			maxAge: 86400,
			maxUses: 1
		});
		return invite;
	}
	// Variables
	const { discord, config } = tools;
	const e = new discord.RichEmbed().setColor(config.colors.main);

	// Code

	if (
		message.member.hasPermission('CREATE_INSTANT_INVITE') &&
		message.guild.me.hasPermission('CREATE_INSTANT_INVITE')
	) {
		e.addField(
			'Server Invite',
			`This is your servers invite link: ${await getInvite()}`
		);
	}
	e.addField(
		'Bot Invite Link',
		`Invite the bot [here](${config.info.links.botInvite.short}): ${config.info.links.botInvite.short}`
	);
	e.addField(
		'Bot Support Server',
		`Join our support server [here](${config.info.links.supportServer.link}): ${config.info.links.supportServer.link} or use code \`${config.info.links.supportServer.code}\``
	);

	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'invite',
		aliases: ['server-invite', 'support-server', 'guild-invite', 'bot-invite']
	},
	info: {
		name: 'Invite',
		usage: 'invite',
		aliases: 'guild-invite, support-server, and bot-invite',
		description: 'Get a invite link for your server and a '
	},
	module: {
		main: 'information',
		sub: 'guild'
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
