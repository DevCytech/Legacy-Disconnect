module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, improperUsageWarn, botData } = tools;
	let user = message.mentions.users.first();
	let gifs = botData.tackle;
	let gif = gifs[Math.floor(Math.random() * gifs.length)];

	// Code
	if (!user) {
		return improperUsageWarn('tackle', message, data);
	}
	const e = new discord.RichEmbed()
		.setAuthor(`${message.author.username} has tackled ${user.username}.`)
		.setColor(config.colors.secondary)
		.setImage(gif);

	return message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'tackle',
		aliases: []
	},
	info: {
		name: 'Tackle',
		usage: 'tackle <@user>',
		aliases: '',
		description: 'Tackle a user.'
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
