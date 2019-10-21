module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	let roulette = [
		':gun: Pow! You are dead, try again?',
		':gun: No bullet so ***you survived***! Would you like to try again?',
		':gun: it Jammed! Did you get lucky? (Try Again)'
	];

	// Code
	const e = new discord.RichEmbed()
		.setTitle('Russian Roulette')
		.setColor(config.colors.game)
		.setDescription(roulette[Math.floor(Math.random() * roulette.length)]);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'russian-roulette',
		aliases: ['rr']
	},
	info: {
		name: 'Russian Roulette',
		usage: 'russian-roulette',
		aliases: 'rr',
		description: 'Please russian roulette and test your luck.'
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
