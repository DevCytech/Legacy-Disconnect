module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	let rate = Math.floor(Math.random() * 100);
	let user = message.mentions.users.first() || message.author;

	// Code
	const e = new discord.RichEmbed()
		.setTitle(':heart: Sexy Rate :heart:')
		.setDescription(
			`I rate ${user.username} a ${rate} out of 100 on the sexy scale.`
		)
		.setColor(config.colors.game)
		.setThumbnail(user.avatarURL);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'sexy-rate',
		aliases: ['sexyness']
	},
	info: {
		name: 'Sexy Rate',
		usage: 'sexy-rate [@user]',
		aliases: 'sexyness',
		description: 'Get someones or your sexy rate.'
	},
	module: {
		main: 'entertainment',
		sub: 'games'
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
