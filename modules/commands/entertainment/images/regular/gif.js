module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, creds, config, superagent } = tools;
	let res = await superagent
		.get('http://api.giphy.com/v1/gifs/random')
		.set('api_key', creds.apis.images.giphy)
		.query({
			rating: message.channel.nsfw === true ? 'r' : 'pg13',
			fmt: 'json'
		})
		.query(`tag=${encodeURIComponent(args.join('+'))}`);

	// Code
	const e = new discord.RichEmbed()
		.setTitle('Random Gif!')
		.setDescription(res.body.data.title)
		.setColor(config.colors.secondary)
		.setImage(`http://media.giphy.com/media/${res.body.data.id}/giphy.gif`);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'giphy',
		aliases: ['gif']
	},
	info: {
		name: 'Giphy Gif',
		usage: 'giphy [search]',
		aliases: 'gif',
		description: 'Get a random gif from giphy.'
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
