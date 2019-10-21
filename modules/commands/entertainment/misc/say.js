module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	let text = args.join(' ');

	// Code
	if (!text) {
		text = 'nothing';
	}

	return message.channel.send(`**${message.author.username}** says ${text}`);
};

module.exports.config = {
	cmd: {
		main: 'say',
		aliases: []
	},
	info: {
		name: 'Say',
		usage: 'say [text]',
		aliases: '',
		description: 'Say something using the bot.'
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
