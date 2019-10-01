module.exports.run = async (bot, message, args, tools, data) => {
	// Variables

	// Code

	// Functions
	message.channel.send('Working.');
};

module.exports.config = {
	cmd: {
		main: 'test',
		aliases: ['t']
	},
	info: {
		name: 'Testing Command',
		usage: 'test',
		aliases: 't',
		description: 'Test the currently WIP Command!'
	},
	module: {
		main: 'developer',
		sub: 'testing'
	},
	settings: {
		dm: false,
		restrictions: 3, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
