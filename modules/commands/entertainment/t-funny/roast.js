module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, improperUsageWarn, botData } = tools;
	let roasts = botData.roast;
	let roast = roasts[Math.floor(Math.random() * roasts.length)];

	// Code
	const e = new discord.RichEmbed()
		.setTitle('Random Roast!')
		.setDescription(roast)
		.setColor(config.colors.secondary);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'roast',
		aliases: []
	},
	info: {
		name: 'Roast',
		usage: 'roast',
		aliases: '',
		description: 'Get a random roast.'
	},
	module: {
		main: 'entertainment',
		sub: 'funny'
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
