module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let image = await superagent
		.get('https://nekobot.xyz/api/image')
		.query({ type: 'coffee' });
	const e = new discord.RichEmbed()
		.setTitle('Coffee!')
		.setColor(config.colors.secondary)
		.setImage(image.body.message);
	message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'coffee',
		aliases: []
	},
	info: {
		name: 'Coffee',
		usage: 'coffee',
		aliases: '',
		description: 'Get a random image of coffee.'
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
