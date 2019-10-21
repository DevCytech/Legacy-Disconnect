module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, improperUsageWarn, botData } = tools;
	let user = message.mentions.users.first();
	let gifs = botData.punch;
	let gif = gifs[Math.floor(Math.random() * gifs.length)];

	// Code
	if (!user) {
		return improperUsageWarn('punch', message, data);
	}
	const e = new discord.RichEmbed()
		.setAuthor(`${message.author.username} punched ${user.username}.`)
		.setColor(config.colors.secondary)
		.setImage(gif);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'punch',
		aliases: []
	},
	info: {
		name: 'Punch',
		usage: 'punch <@user>',
		aliases: '',
		description: 'Punch another user.'
	},
	module: {
		main: 'entertainment',
		sub: 'role-play'
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
