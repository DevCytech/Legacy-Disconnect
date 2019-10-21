module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const emojiList = message.guild.emojis
		.map((e, x) => x + ' = ' + e + ' | ' + e.name)
		.join('\n');
	// Code

	if (emojiList == '') {
		return message.channel.send('This guild has no emojis.');
	}

	return message.channel.send('>>> ' + emojiList);
};

module.exports.config = {
	cmd: {
		main: 'emojis',
		aliases: ['guild-emojis']
	},
	info: {
		name: 'Guild Emojis',
		usage: 'emojis',
		aliases: 'guild-emojis',
		description: 'Get a list of all the guilds emojis.'
	},
	module: {
		main: 'information',
		sub: 'guild'
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
