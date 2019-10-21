module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord } = tools;

	// Code
	let slots = ['🍎', '🍌', '🍒', '🍓', '🍈'];
	let result1 = Math.floor(Math.random() * slots.length);
	let result2 = Math.floor(Math.random() * slots.length);
	let result3 = Math.floor(Math.random() * slots.length);

	const e = new discord.RichEmbed()
		.setTitle(message.author.username + ' has played the slots :slot_machine:')
		.addField('Results:', slots[result1] + slots[result2] + slots[result3]);

	if (slots[result1] === slots[result2] && slots[result3]) {
		e.setColor(config.colors.success);
		e.setDescription('YOU WON!');
		message.channel.send(e);
	} else {
		e.setColor(config.colors.error);
		e.setDescription('You lost!');
		message.channel.send(e);
	}
};

module.exports.config = {
	cmd: {
		main: 'slots',
		aliases: ['play-slots']
	},
	info: {
		name: 'Slots',
		usage: 'slots',
		aliases: 'play-slots',
		description: 'Plat the slot machine.'
	},
	module: {
		main: 'entertainment',
		sub: 'games'
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
