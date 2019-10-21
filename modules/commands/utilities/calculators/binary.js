module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, improperUsageWarn } = tools;

	// Code
	let words = args;

	if (args.length !== 0) {
		let res = await superagent.get(
			`https://some-random-api.ml/binary?text=${words}`
		);
		const e = new discord.RichEmbed()
			.setTitle('Ascii => Binary Converter')
			.setDescription(`${words} in binary is: \n ${res.body.binary}`)
			.setColor(config.colors.secondary)
			.attachFiles(['./assets/images/binary.png'])
			.setThumbnail('attachment://binary.png');
		return message.channel.send(e);
	} else {
		return improperUsageWarn('binary', message, data);
	}
};

module.exports.config = {
	cmd: {
		main: 'binary',
		aliases: ['binary-converter']
	},
	info: {
		name: 'Binary Converter',
		usage: 'binary <text>',
		aliases: 'binary-converter',
		description: 'Convert ascii(text) to binary.'
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
