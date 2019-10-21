module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent } = tools;
	const { body } = await superagent
		.get('https://www.reddit.com/r/Showerthoughts.json')
		.query({ limit: 1000 });
	const allowed = message.channel.nsfw
		? body.data.children
		: body.data.children.filter(post => !post.data.over_18);
	const e = new discord.RichEmbed()
		.setTitle('Random Shower Thought')
		.setColor(config.colors.secondary);

	// Code
	if (!allowed.length) {
		e.setDescription(
			'It seems the shower thoughts are gone right now. Try again later!'
		);
	} else {
		e.setDescription(
			allowed[Math.floor(Math.random() * allowed.length)].data.title
		);
	}
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'shower-thought',
		aliases: []
	},
	info: {
		name: 'Shower Thought',
		usage: 'shower-thought',
		aliases: '',
		description: 'Get a random shower thought.'
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
