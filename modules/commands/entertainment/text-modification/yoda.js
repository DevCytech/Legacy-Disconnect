module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, errorWarn } = tools;

	// Code
	const speech = args.join(' ');
	if (speech.length < 2) {
		return errorWarn(
			message,
			'You must type something that you would like translated by Yoda. Yes.'
		);
	} else {
		const { text } = await superagent.get(
			`http://yoda-api.appspot.com/api/v1/yodish?text=${encodeURIComponent(
				speech.toLowerCase()
			)}`
		);

		const e = new discord.RichEmbed()
			.setTitle('Yoda Says:')
			.setColor(config.colors.secondary)
			.setDescription(JSON.parse(text).yodish);
		return message.channel.send(e);
	}
};

module.exports.config = {
	cmd: {
		main: 'yoda',
		aliases: ['yoda-say']
	},
	info: {
		name: 'Yoda Say. Yes.',
		usage: 'yoda <text>',
		aliases: 'yoda-say',
		description: 'Change the text into something yoda would say. Yes.'
	},
	module: {
		main: 'entertainment',
		sub: 'text-modification'
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
