module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent.get('https://dog.ceo/api/breeds/image/random');
	const e = new discord.RichEmbed()
		.setTitle('Random Dog!')
		.setColor(config.colors.secondary)
		.setImage(image.body.message);
	message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'dog',
		aliases: []
	},
	info: {
		name: 'dog',
		usage: 'dog',
		aliases: '',
		description: 'Get a random picture of a dog.'
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
