module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent.get('https://some-random-api.ml/img/red_panda');
	const e = new discord.RichEmbed()
		.setTitle('Random Red Panda!')
		.setColor(config.colors.secondary)
		.setImage(image.body.link);
	message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'red-panda',
		aliases: ['r-panda']
	},
	info: {
		name: 'Red Panda',
		usage: 'red-panda',
		aliases: 'r-panda',
		description: 'Get a random picture of a red panda.'
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
