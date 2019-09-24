module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, isgd, errorWarn } = tools,
		shorten = isgd;
	// Code
	if (!args[0]) {
		let text = 'Please provide a link to shorten.';
		return errorWarn(message, text);
	}
	shorten.shorten(args[0], function(res) {
		if (res.startsWith(`Error:`)) {
			let text = 'Please provide a valid URL';
			return errorWarn(message, text);
		}
		const embed = new discord.RichEmbed()
			.setTitle('Link Shortened!')
			.setDescription(`Your new link has been created: **<${res}>**`)
			.setColor(config.colors.secondary);
		return message.channel.send(embed);
	});
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'link-shortener',
		aliases: ['shorten', 'shorten-link', 'link-shorten', 'new-link']
	},
	info: {
		name: 'Link Shortener',
		usage: 'link-shortener',
		aliases: 'shorten, new-link',
		description: 'Shorten your own link using is.gd.'
	},
	module: {
		main: 'utility',
		sub: 'tool'
	},
	settings: {
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
