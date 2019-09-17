module.exports.run = async (bot, message, args, data) => {
	// Variables

	// Code

	// Functions
	message.channel.send('Working.');
};

module.exports.config = {
	cmd: {
		main: 'test',
		aliases: []
	},
	info: {
		name: '',
		ussage: '',
		description: ''
	},
	module: {
		main: '',
		sub: ''
	},
	settings: {
		restrictions: '0', // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
