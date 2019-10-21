module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent.get('https://nekos.life/api/v2/img/lizard');
	const e = new discord.RichEmbed()
		.setTitle('Random Lizard!')
		.setColor(config.colors.secondary)
		.setImage(image.body.url);
	message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'lizard',
		aliases: []
	},
	info: {
		name: 'Lizard',
		usage: 'lizard',
		aliases: '',
		description: 'Get a random picture of a lizard.'
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
