module.exports.run = async (bot, message, args, tools, data) => {
	// Functions
	function getDesc(history) {
		if (history.name_history.length === 1) {
			return 'This user has not changed their name before.';
		} else {
			let desc;
			history.name_history.forEach(name => {
				if (desc === null) {
					desc = `**${name.name}** | ${name.changedToAt}\n`;
				} else {
					desc = desc + `**${name.name}** | ${name.changedToAt}\n`;
				}
			});
			return desc;
		}
	}

	// Variables
	const { config, discord, superagent, improperUsageWarn } = tools;

	// Code
	let username = args;
	if (args.length !== 0) {
		let history = await superagent.get(
			`https://some-random-api.ml/mc?username=${username}`
		);
		history = history.body;
		const e = new discord.RichEmbed()
			.setTitle(`${history.username}'s Minecraft Username History`)
			.setColor(config.colors.secondary)
			.setDescription(getDesc(history));
		return message.channel.send(e);
	} else {
		return improperUsageWarn('lookup-minecraft-username', message, data);
	}
};

module.exports.config = {
	cmd: {
		main: 'namemc',
		aliases: ['mc-username', 'mc-name', 'minecraft-username', 'minecraft-name']
	},
	info: {
		name: 'Minecraft Username History',
		usage: 'namemc <username>',
		aliases: 'minecraft-name, minecraft-username',
		description: 'Get a users username history.'
	},
	module: {
		main: 'integration',
		sub: 'game'
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
