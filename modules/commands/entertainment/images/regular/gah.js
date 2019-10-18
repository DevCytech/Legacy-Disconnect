module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent
		.get('https://nekobot.xyz/api/image')
		.query({ type: 'gah' });
	const e = new discord.RichEmbed()
		.setTitle('Gah!')
		.setColor(config.colors.secondary)
		.setImage(image.body.message);
	message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'gah',
		aliases: []
	},
	info: {
		name: 'Gah',
		usage: 'gah',
		aliases: '',
		description: 'Get a picture of gah.'
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
