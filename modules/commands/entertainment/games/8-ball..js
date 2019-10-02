module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, improperUsageWarn } = tools;
	let responses = [
		'It is certain',
		'It is decidedly so',
		'Without a doubt',
		'Yes, definitely',
		'You may rely on it',
		'As I see it, yes',
		'Most likely',
		'Outlook good',
		'Yes',
		'Signs point to yes',
		'Reply hazy try again',
		'Ask again later',
		'Better not tell you now',
		'Cannot predict now',
		'Concentrate and ask again',
		"Don't count on it",
		'My reply is no',
		'My sources say no',
		'Outlook not so good',
		'Very doubtful'
	];
	// Code
	if (!args[0]) {
		return improperUsageWarn('8-ball', message, data);
	} else {
		const e = new discord.RichEmbed()
			.setAuthor(
				'Super 8 Ball',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn__KoCHstV9B3PQkHLibLdQWuiXm97D1Scx7nb3Rnv_hZ3mGT'
			)
			.setColor(config.colors.game)
			.setDescription(
				responses[Math.floor(Math.random() * responses.length + 0)]
			);
		return message.channel.send(e);
	}

	// Functions
};

module.exports.config = {
	cmd: {
		main: '8-ball',
		aliases: ['super-8-ball']
	},
	info: {
		name: 'Super 8 Ball',
		usage: '8-ball <question>',
		aliases: 'super-8-ball',
		description: 'Get a prediction from the super eight ball.'
	},
	module: {
		main: 'entertainment',
		sub: 'games'
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
