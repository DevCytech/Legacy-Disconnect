module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, randomPuppy } = tools;
	let reddit = [
		'meme',
		'animemes',
		'MemesOfAnime',
		'animememes',
		'AnimeFunny',
		'dankmemes',
		'dankmeme',
		'wholesomememes',
		'MemeEconomy',
		'techsupportanimals',
		'meirl',
		'me_irl',
		'2meirl4meirl',
		'AdviceAnimals'
	];
	let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

	// Code
	const e = new discord.RichEmbed()
		.setTitle('Random Meme!')
		.setColor(config.colors.secondary)
		.setImage(await randomPuppy(subreddit))
		.setFooter(
			`Meme from the ${subreddit} subreddit. Some image may not work do to the wrong format!`
		);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'meme',
		aliases: []
	},
	info: {
		name: 'Meme',
		usage: 'meme',
		aliases: '',
		description: 'Get a random meme from reddit. Thank you redditers.'
	},
	module: {
		main: 'images',
		sub: 'funny'
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
