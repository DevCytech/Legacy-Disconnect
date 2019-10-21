module.exports.run = async (bot, message, args, tools, data) => {
	return message.channel.send('┬─┬ ノ( ゜-゜ノ)');
};

module.exports.config = {
	cmd: {
		main: 'unflip',
		aliases: ['unflip-table', 'table-unflip']
	},
	info: {
		name: 'Unflip Table',
		usage: 'unflip',
		aliases: 'unflip-table',
		description: 'Unflip a flipped table.'
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
