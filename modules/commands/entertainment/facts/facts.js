module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent } = tools;
	let res = await superagent.get(
		'https://uselessfacts.jsph.pl/random.json?language=en'
	);

	// Code
	const e = new discord.RichEmbed()
		.setTitle('Fun Fact.')
		.setColor(config.colors.secondary)
		.setDescription(res.body.text)
		.setFooter(`Fact ID: ${res.body.id}`);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'fun-fact',
		aliases: ['fact']
	},
	info: {
		name: 'Fun Fact',
		usage: 'fun-fact',
		aliases: 'fact',
		description: 'Get a random fun fact.'
	},
	module: {
		main: 'entertainment',
		sub: 'facts'
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
