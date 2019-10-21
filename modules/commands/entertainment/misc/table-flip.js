module.exports.run = async (bot, message, args, tools, data) => {
	return message.channel.send('(╯°□°）╯︵ ┻━┻');
};

module.exports.config = {
	cmd: {
		main: 'flip-table',
		aliases: ['table-flip']
	},
	info: {
		name: 'Table Flip',
		usage: 'table-flip',
		aliases: 'flip-table',
		description: 'Flip a unflipped table.'
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
