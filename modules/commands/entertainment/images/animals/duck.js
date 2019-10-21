module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent.get(
		'https://random-d.uk/api/v1/random?type=jpg'
	);
	const e = new discord.RichEmbed()
		.setTitle('Random Duck!')
		.setColor(config.colors.secondary)
		.setImage(image.body.url);
	message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'duck',
		aliases: []
	},
	info: {
		name: 'Duck',
		usage: 'duck',
		aliases: '',
		description: 'Get a random picture of a duck.'
	},
	module: {
		main: 'images',
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
