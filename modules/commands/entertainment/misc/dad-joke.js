module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, superagent, config } = tools;
	let res = await superagent.get(`https://icanhazdadjoke.com/slack`);
	// Code
	let e = new discord.RichEmbed()
		.setTitle('Random Dad Joke!')
		.setColor(config.colors.secondary)
		.setDescription(res.body.attachments.map(a => a.text));
	return message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'dad-joke',
		aliases: []
	},
	info: {
		name: 'Dad Joke',
		usage: 'dad-joke',
		aliases: '',
		description: 'Get a random dad joke.'
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
