module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent.get('https://some-random-api.ml/img/birb');
	const e = new discord.RichEmbed()
		.setTitle('Random Bird!')
		.setColor(config.colors.secondary)
		.setImage(image.body.link);
	message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'bird',
		aliases: []
	},
	info: {
		name: 'Bird',
		usage: 'bird',
		aliases: '',
		description: 'Get a random picture of a bird.'
	},
	module: {
		main: 'entertainment',
		sub: 'animals'
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
