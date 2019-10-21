module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const filter = (reaction, user) => {
		return (
			(reaction.emoji.name === '🗿' && user.id === message.author.id) ||
			(reaction.emoji.name === '📄' && user.id === message.author.id) ||
			(reaction.emoji.name === '✂' && user.id === message.author.id)
		);
	};
	const { discord, improperUsageWarn, config } = tools;
	let rps = ['rock', 'paper', 'scissors'];
	let emojis = {
		rock: ':moyai:',
		paper: ':page_facing_up:',
		scissors: ':scissors:'
	};
	let choice = args.join(' ').toLowerCase();
	let rpsChoice = rps[Math.floor(Math.random() * rps.length)];
	const e = new discord.RichEmbed().setTitle('Rock Paper Scissors');

	// Code
	if (choice) {
		if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
			return improperUsageWarn('rock-paper-scissors', message, data);
		}
		e.setDescription(
			`I pick ${rpsChoice} ${emojis[rpsChoice]}! You picked: ${emojis[choice]}`
		);
		e.setColor(config.colors.game);
		return message.channel.send(e);
	} else {
		e.setDescription(`Please select an reaction below to pick your choice.`);
		e.setColor(config.colors.game);
		let msg = await message.channel.send(e);
		await msg.react('🗿');
		await msg.react('📄');
		await msg.react('✂');

		msg
			.awaitReactions(filter, { max: 1, time: 60000, errrors: ['time'] })
			.then(async collected => {
				const reaction = collected.first();
				if (reaction) {
					e.setDescription(
						`I pick ${rpsChoice} ${emojis[rpsChoice]}! You picked: ${reaction.emoji}`
					);
					e.setColor(config.colors.game);
					return message.channel.send(e);
				}
			});
	}
};

module.exports.config = {
	cmd: {
		main: 'rock-paper-scissors',
		aliases: ['rps']
	},
	info: {
		name: 'Rock Paper Scissors',
		usage: 'rock-paper-scissors [rock, paper, or scissors]',
		aliases: 'rps',
		description: 'Please a game of rock paper scissors.'
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
