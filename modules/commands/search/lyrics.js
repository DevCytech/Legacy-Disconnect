module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent, improperUsageWarn } = tools;

	// Code
	let song = args;
	if (args.length !== 0) {
		let lyrics = await superagent.get(
			`https://some-random-api.ml/lyrics?title=${song}`
		);
		let count = {};
		count.title = lyrics.body.title.split('').length;
		count.author = lyrics.body.author.split('').length;
		count.link = lyrics.body.links.genius.split('').length;
		count.remove = 2048 - (count.title + count.author + 100);
		count.lyrics = lyrics.body.lyrics.split('').length;
		let i2 = Math.ceil(count.lyrics / count.remove),
			i = 0;

		const e = new discord.RichEmbed().setColor(config.colors.secondary);
		while (i !== i2) {
			e.setTitle(
				`${lyrics.body.title} by ${lyrics.body.author} Lyrics (${i + 1}/${i2})`
			);
			e.setURL(lyrics.body.links.genius);
			e.setThumbnail(lyrics.body.thumbnail.genius);
			e.setDescription(
				`${lyrics.body.lyrics
					.substr(i * count.remove, (i + 1) * count.remove)
					.replace(/[\n]/g, '\n\n')}`
			);
			message.channel.send(e);
			i++;
		}
	} else {
		return improperUsageWarn(
			'lyrics',
			message,
			data,
			'Please type in a valid song name.'
		);
	}
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
		main: 'search',
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
