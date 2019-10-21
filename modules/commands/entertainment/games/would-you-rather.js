module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, capitalize } = tools;

	// Code
	let res = await superagent.get('http://www.rrrather.com/botapi');
	const e = new discord.RichEmbed()
		.setAuthor('Would You Rather...?')
		.setTitle(`${capitalize(res.body.title)}`)
		.setColor(config.colors.game)
		.setDescription(
			`${capitalize(res.body.choicea)} **OR** ${capitalize(res.body.choiceb)}`
		)
		.setThumbnail(
			'https://www.logolynx.com/images/logolynx/80/801614bad4ce983db96dc6e07b22ac0f.png'
		);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'would-you-rather',
		aliases: ['wur']
	},
	info: {
		name: 'Would You Rather..?',
		usage: 'would-you-rather',
		aliases: 'wur',
		description: ''
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
