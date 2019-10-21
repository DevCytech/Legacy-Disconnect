module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	let restriction = {
		0: 'Everyone',
		1: 'Guild Admin Only',
		2: 'Guild Owner Only',
		3: 'Bot Developer Only'
	};
	let command =
		bot.commands.get(args[0]) || bot.commands.get(bot.aliases.get(args[0]));
	const { discord, config, improperUssageWarn, capitalize, errorWarn } = tools;
	let e = new discord.RichEmbed().setColor(config.colors.main);

	// Code
	if (command) {
		// Set Title and make sure that there isn't 2 helps in the title
		if (command.config.info.name.toLowerCase().includes('help')) {
			e.setTitle(capitalize(command.config.info.name));
		} else {
			e.setTitle(capitalize(command.config.info.name) + ' Help');
		}

		if (command.config.settings.premium === true) {
			e.setColor(config.colors.premium);
		}

		e.setDescription(
			`__**Name:**__ ${command.config.info.name} \n__**Command:**__ ${
				command.config.cmd.main
			} \n__**Usage:**__ ${command.config.info.usage} \n__**Aliases:**__ ${
				command.config.info.aliases
			} \n__**Module:**__ ${capitalize(
				command.config.module.main
			)} \n__**Sub Module:**__ ${
				command.config.module.sub
					? capitalize(command.config.module.sub)
					: 'Other'
			} \n__**Restriction:**__ ${
				restriction[command.config.settings.restrictions]
			} \n__**Description:**__ ${command.config.info.description}`
		);
		// Setting the footer
		e.setFooter(
			`For a list of commands, type ${data.guild.main.prefix}command-list`
		);

		// Send Message
		return message.channel.send(e);
	} else {
		return errorWarn(
			message,
			"Please include a valid command or alias to get it's information"
		);
	}
};

module.exports.config = {
	cmd: {
		main: 'command-help',
		aliases: ['cmd-help', 'cmdh']
	},
	info: {
		name: 'Command Help',
		usage: 'command-help <command>',
		aliases: 'cmd-help, cmdh',
		description: 'Get information about a command.'
	},
	module: {
		main: 'information',
		sub: 'bot'
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
