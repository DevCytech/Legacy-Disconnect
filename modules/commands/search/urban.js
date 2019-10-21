module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, errorWarn } = tools;
	let types = ['top'];
	let word = args.join(' ');

	// Code
	if (word) {
		try {
			const { body } = await superagent
				.get('http://api.urbandictionary.com/v0/define')
				.query({ term: word });
			if (!body.list.length) {
				return errorWarn(message, 'Could not find any results.');
			}
			const data =
				body.list[
					types === 'top' ? 0 : Math.floor(Math.random() * body.list.length)
				];
			const e = new discord.RichEmbed()
				.setColor(config.colors.secondary)
				.setAuthor(
					'Urban Dictionary',
					'https://i.imgur.com/Fo0nRTe.png',
					'https://www.urbandictionary.com/'
				)
				.setURL(data.permalink)
				.setTitle(data.word)
				.setDescription(data.definition)
				.addField('Example', data.example);
			const filtercheck = [
				'xxx',
				'porn',
				'sex',
				'18+',
				'nsfw',
				'hentai',
				'dick',
				'vagina',
				'pussy'
			];
			if (
				filtercheck.some(word2 => data.definition.toLowerCase().includes(word2))
			) {
				return errorWarn(message, 'Not allowed to search nsfw content.');
			}
			if (filtercheck.some(word3 => data.word.toLowerCase().includes(word3))) {
				return errorWarn(message, 'Not allowed to search nsfw content.');
			}
			message.channel.send(e);
		} catch (err) {
			return errorWarn(
				message,
				`Oh no, an error occurred: \`${err.message}\`. Try again later!`
			);
		}
	} else {
		return errorWarn(
			message,
			'Please enter a word you would like urban dictionary to define.'
		);
	}
};

module.exports.config = {
	cmd: {
		main: 'urban',
		aliases: []
	},
	info: {
		name: '',
		usage: '',
		aliases: '',
		description: ''
	},
	module: {
		main: '',
		sub: ''
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
