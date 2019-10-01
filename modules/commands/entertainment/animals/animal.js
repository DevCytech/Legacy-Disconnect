module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent } = tools;
	// Code
	let res = await superagent.get('');
	const e = new discord.RichEmbed()
		.setTitle('Random !')
		.setColor(config.colors.secondary)
		.attachFiles(['./assets/images/binary.png'])
		.setThumbnail('attachment://binary.png');
	message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: '',
		aliases: []
	},
	info: {
		name: '',
		usage: '',
		aliases: '',
		description: 'Get a random picture of a _.'
	},
	module: {
		main: 'entertainment',
		sub: 'animals'
	},
	settings: {
		dm: true,
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
