module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;

	// Code
	const e = new discord.RichEmbed()
		.setTitle(':game_die: Dice Roll')
		.setDescription(
			`Your dice has landed on... **${Math.floor(Math.random() * 6) + 1}!**`
		)
		.setColor(config.colors.game);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'dice-roll',
		aliases: ['roll-die', 'roll']
	},
	info: {
		name: 'Dice Roll',
		usage: 'dice-roll',
		aliases: 'roll-die, roll',
		description: 'Roll a six sided die.'
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
