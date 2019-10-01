module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent } = tools;
	let res = await superagent.get('https://some-random-api.ml/facts/fox');
	// Code
	const e = new discord.RichEmbed()
		.setTitle('Fun Fox Fact.')
		.setColor(config.colors.secondary)
		.setDescription(res.body.fact);
	return message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'fox-fact',
		aliases: []
	},
	info: {
		name: 'Fox Fact',
		usage: 'fox-fact',
		aliases: '',
		description: 'Get a random fox fact.'
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
