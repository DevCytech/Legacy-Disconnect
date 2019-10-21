module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	let user1 = args[0];
	let user2 = args.slice(1).join(' ');
	const { discord, config, improperUsageWarn } = tools;
	let ship = Math.floor(Math.random() * 100) + 1;

	// Code
	if (!user1) {
		return improperUsageWarn(
			'ship',
			message,
			data,
			'Please specify the first person,'
		);
	}
	if (!user2) {
		return improperUsageWarn(
			'ship',
			message,
			data,
			'Please specify the second person.'
		);
	}

	if (ship <= 50) {
		const e = new discord.RichEmbed()
			.setColor(config.colors.game)
			.setTitle(user1 + ' and ' + user2 + " didn't last long. :(")
			.setDescription(':broken_heart: ' + ship + '% :broken_heart:');
		message.channel.send(e);
	} else if (ship === 100) {
		const e = new discord.RichEmbed()
			.setColor(config.colors.game)
			.setTitle(user1 + ' and ' + user2 + ' hit it off!')
			.setDescription(':heart: ' + ship + '% :heart:');
		message.channel.send(e);
	} else {
		const e = new discord.RichEmbed()
			.setColor(config.colors.game)
			.setTitle(user1 + ' and ' + user2 + ' had a few bumps but match.')
			.setDescription(':heart: ' + ship + '% :heart:');
		message.channel.send(e);
	}
};

module.exports.config = {
	cmd: {
		main: 'ship',
		aliases: []
	},
	info: {
		name: 'Ship',
		usage: 'ship <person> <person>',
		aliases: '',
		description: 'Ship two people and see how they match.'
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
