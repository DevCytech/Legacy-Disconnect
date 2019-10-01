module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	// Code
	const emojiList = message.guild.emojis
		.map((e, x) => x + ' = ' + e + ' | ' + e.name)
		.join('\n');
	message.channel.send('>>> ' + emojiList);

	// Functions
};

module.exports.config = {
	cmd: {
		main: 'emojis',
		aliases: []
	},
	info: {
		name: '',
		usage: '',
		aliases: '',
		description: ''
	},
	module: {
		main: '',
		sub: ''
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
