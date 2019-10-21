module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	let text = args.join(' ');
	let reversed = text
		.split('')
		.reverse()
		.join('');

	// Code
	const e = new discord.RichEmbed()
		.setTitle('txeT desreveR')
		.setDescription(reversed)
		.setColor(config.colors.secondary);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'reverse',
		aliases: ['reverse-text']
	},
	info: {
		name: 'Reverse Text',
		usage: 'reverse-text',
		aliases: 'reverse',
		description: 'Reverse the order of your text.'
	},
	module: {
		main: 'entertainment',
		sub: 'text-modification'
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
