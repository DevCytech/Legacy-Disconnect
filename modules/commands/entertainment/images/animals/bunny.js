module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent.get(
		'https://api.bunnies.io/v2/loop/random/?media=gif,png'
	);
	const e = new discord.RichEmbed()
		.setTitle('Random Bunny!')
		.setColor(config.colors.secondary)
		.setImage(image.body.media.poster);
	message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'bunny',
		aliases: []
	},
	info: {
		name: 'Bunny',
		usage: 'bunny',
		aliases: '',
		description: 'Get a random picture of a bunny.'
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
