module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent } = tools;
	const res = await superagent.get('http://api.icndb.com/jokes/random');
	// Code
	const e = new discord.RichEmbed()
		.setTitle('Chuck Norris Joke')
		.setDescription(res.body.value.joke)
		.setColor(config.colors.secondary);
	return message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'chuck-norris-joke',
		aliases: ['chuck-norris', 'chuck-joke']
	},
	info: {
		name: '',
		usage: '',
		aliases: '',
		description: 'Get a Chuck Norris joke.'
	},
	module: {
		main: '',
		sub: ''
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
