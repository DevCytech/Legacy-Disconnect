module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent } = tools;
	let res = await superagent.get('https://some-random-api.ml/facts/dog');

	// Code
	const e = new discord.RichEmbed()
		.setTitle('Fun Dog Fact.')
		.setColor(config.colors.secondary)
		.setDescription(res.body.fact);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'dog-fact',
		aliases: []
	},
	info: {
		name: 'Dog Fact',
		usage: 'dog-fact',
		aliases: '',
		description: 'Get a random dog fact.'
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
