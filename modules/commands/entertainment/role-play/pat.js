module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, improperUsageWarn } = tools;
	let user = message.mentions.users.first();
	let res = await superagent.get('https://some-random-api.ml/animu/pat');

	// Code
	if (!user) {
		return improperUsageWarn('pat', message, data);
	}
	const e = new discord.RichEmbed()
		.setAuthor(`${message.author.username} patted ${user.username}.`)
		.setColor(config.colors.secondary)
		.setImage(res.body.link);
	return message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'pat',
		aliases: []
	},
	info: {
		name: 'Pat',
		usage: 'pat <@user>',
		aliases: '',
		description: 'Pat another user.'
	},
	module: {
		main: 'entertainment',
		sub: 'role-play'
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
