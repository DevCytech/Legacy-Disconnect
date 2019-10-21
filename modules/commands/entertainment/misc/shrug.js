module.exports.run = async (bot, message, args, tools, data) => {
	return message.channel.send('¯\\_(ツ)_/¯');
};

module.exports.config = {
	cmd: {
		main: 'shrug',
		aliases: []
	},
	info: {
		name: '¯\\_(ツ)_/¯',
		usage: 'shrug',
		aliases: '',
		description: '¯\\_(ツ)_/¯'
	},
	module: {
		main: 'entertainment',
		sub: 'misc'
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
