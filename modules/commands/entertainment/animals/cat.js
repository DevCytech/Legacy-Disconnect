module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent.get('https://nekos.life/api/v2/img/meow');
	const e = new discord.RichEmbed()
		.setTitle('Random Cat!')
		.setColor(config.colors.secondary)
		.setImage(image.body.url);
	message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'cat',
		aliases: []
	},
	info: {
		name: 'Cat',
		usage: 'cat',
		aliases: '',
		description: 'Get a random picture of a cat.'
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
