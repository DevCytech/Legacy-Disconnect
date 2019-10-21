module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent } = tools;
	const res = await superagent.get('http://api.adviceslip.com/advice');
	const advice = JSON.parse(res.text);
	// Code
	const e = new discord.RichEmbed()
		.setTitle('Advice')
		.setDescription(advice.slip.advice)
		.setColor(config.colors.secondary);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'advice',
		aliases: []
	},
	info: {
		name: 'Advice',
		usage: 'advice',
		aliases: '',
		description: 'Get some advice, maybe it will be helpful.'
	},
	module: {
		main: 'entertainment',
		sub: 'misc'
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
