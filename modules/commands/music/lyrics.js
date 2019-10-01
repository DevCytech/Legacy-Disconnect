module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent, improperUsageWarn } = tools;
	// Code
	let song = args;
	if (args.length !== 0) {
		let lyrics = await superagent.get(
			`https://some-random-api.ml/lyrics?title=${song}`
		);
		const e = new discord.RichEmbed()
			.setTitle(`${lyrics.body.title} Lyrics`)
			.setColor(config.colors.secondary)
			.setDescription(
				`[${lyrics.body.title} by ${lyrics.body.author}](${lyrics.body.links.genius})\n\n${lyrics.body.lyrics}`
			)
			.setImage(lyrics.body.thumbnail.genius);
		return message.channel.send(e);
	} else {
		return improperUsageWarn('lyrics', message, data);
	}
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'lyrics',
		aliases: ['get-lyrics', 'find-lyrics', 'search-lyrics']
	},
	info: {
		name: 'Song Lyrics',
		usage: 'lyrics <song>',
		aliases: 'get-lyrics, find-lyrics, and search-lyrics',
		description: 'Get the lyrics of a song.'
	},
	module: {
		main: 'music',
		sub: 'search'
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
