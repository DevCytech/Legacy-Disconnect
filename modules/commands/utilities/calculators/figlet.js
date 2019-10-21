module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { figlet, improperUsageWarn } = tools;

	// Code
	if (args.join(' ').length > 14) {
		return improperUsageWarn(
			'figlet',
			message,
			data,
			'Can not have more than 14 characters!'
		);
	}
	if (!args.join(' ')) {
		figlet('Text?', (err, data) => {
			message.channel.send(
				'``` Please enter text you would like to be converted next time.\n' +
					data +
					'```'
			);
		});
	} else {
		figlet(args.join(' '), (err, data) => {
			message.channel.send('```' + data + '```');
		});
	}
};

module.exports.config = {
	cmd: {
		main: 'figlet',
		aliases: ['ascii']
	},
	info: {
		name: 'Figlet',
		usage: 'figlet [text]',
		aliases: 'ascii',
		description: 'Make text bigger using figlet.'
	},
	module: {
		main: 'utility',
		sub: 'calculator'
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
