module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent
		.get('https://nekobot.xyz/api/image')
		.query({ type: 'kemonomimi' });
	const e = new discord.RichEmbed()
		.setTitle('Kemonomimi!')
		.setColor(config.colors.secondary)
		.setImage(image.body.message);
	message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'kemonomimi',
		aliases: []
	},
	info: {
		name: 'Kemonomimi',
		usage: 'kemonomimi',
		aliases:
			'Get a random picture of humanoid characters that possess animal-like features.',
		description: 'Get a random image of .'
	},
	module: {
		main: 'entertainment',
		sub: 'images'
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
