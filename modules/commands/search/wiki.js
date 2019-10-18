module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, errorWarn } = tools;
	// Code
	const search = args.join(' ');
	let res = await superagent.get('https://en.wikipedia.org/w/api.php').query({
		action: 'query',
		prop: 'extracts',
		format: 'json',
		titles: search,
		exintro: '',
		explaintext: '',
		redirects: '',
		formatversion: 2
	});

	if (res.body.query.pages[0].missing) {
		return errorWarn(message, 'No Results have been found.');
	}

	const e = new discord.RichEmbed()
		.setColor(0x00a2e8)
		.setTitle(res.body.query.pages[0].title)
		.setAuthor('Wikipedia', 'https://i.imgur.com/a4eeEhh.png')
		.setDescription(
			res.body.query.pages[0].extract.substr(0, 2000).replace(/[\n]/g, '\n\n')
		);
	return message.channel.send(e);

	// Functions
};

module.exports.config = {
	cmd: {
		main: 'wikipedia',
		aliases: ['wiki']
	},
	info: {
		name: 'Wikipedia',
		usage: 'wikipedia <search>',
		aliases: 'wiki',
		description: 'Get a preview of wikipedia page.'
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
