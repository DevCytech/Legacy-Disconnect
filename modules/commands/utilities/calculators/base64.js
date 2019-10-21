module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, improperUsageWarn } = tools;

	// Code
	let words = args;

	if (args.length !== 0) {
		let res = await superagent.get(
			`https://some-random-api.ml/base64?encode=${words}`
		);
		const e = new discord.RichEmbed()
			.setTitle('Ascii => base64 Converter')
			.setDescription(`${words} in base64 is: \n ${res.body.base64}`)
			.setColor(config.colors.secondary);
		return message.channel.send(e);
	} else {
		return improperUsageWarn('base64', message, data);
	}
};

module.exports.config = {
	cmd: {
		main: 'base64',
		aliases: ['base64-converter']
	},
	info: {
		name: 'Base64 Converter',
		usage: 'base64 <text>',
		aliases: 'base64-converter',
		description: 'Convert ascii(text) to base64.'
	},
	module: {
		main: 'utility',
		sub: 'calculator'
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
