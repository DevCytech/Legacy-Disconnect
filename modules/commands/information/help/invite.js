module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	
	// Code
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
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
