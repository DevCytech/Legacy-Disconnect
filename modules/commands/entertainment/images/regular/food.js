module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent
		.get('https://nekobot.xyz/api/image')
		.query({ type: 'food' });
	const e = new discord.RichEmbed()
		.setTitle('Food!')
		.setColor(config.colors.secondary)
		.setImage(image.body.message);
	message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'food',
		aliases: []
	},
	info: {
		name: 'Food',
		usage: 'food',
		aliases: '',
		description: 'Get a random image of food.'
	},
	module: {
		main: 'images',
		sub: 'regular'
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
