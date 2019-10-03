module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent } = tools;
	const res = await superagent.get(
		'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
	);
	// Code
	const e = new discord.RichEmbed()
		.setTitle('Donald Trump Quote!')
		.setDescription(res.body.message)
		.setColor(config.colors.secondary);
	return message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'trump-quote',
		aliases: ['trump', 'quote-trump']
	},
	info: {
		name: 'Trump Quotes',
		usage: 'trump-quote',
		aliases: 'trump, quote-trump',
		description: 'Get Donald Trump quotes.'
	},
	module: {
		main: 'entertainment',
		sub: 'quotes'
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
