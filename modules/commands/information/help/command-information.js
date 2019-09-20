module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	let cmd = args.shift(),
		{ discord, config, improperUsageWarn, capitalize } = tools,
		e = new discord.RichEmbed(),
		command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
	// Code
	if (command) {
		// Create the embed
		const e = new discord.RichEmbed().setColor(config.colors.main);

		// Set the title on the embed
		if (command.config.info.name.includes('help')) {
			e.setAuthor(command.config.info.name);
		} else {
			e.setAuthor(command.config.info.name + ' Help');
		}

		// Set the command description
		e.setDescription(command.config.info.description);

		// Set the command callings
		e.addField(
			'Command Usage',
			data.guild.main.prefix + command.config.info.usage,
			true
		);

		// Set the aliases
		if (
			command.config.info.aliases !== '' ||
			command.config.cmd.aliases.length !== 0
		) {
			e.addField('Aliases', command.config.info.aliases, true);
		}

		// Show the module
		if (command.config.module.sub !== '') {
			e.addField(
				'Modules',
				capitalize(command.config.module.main) +
					' ⟹ ' +
					capitalize(command.config.module.sub),
				true
			);
		} else {
			e.addField('Module', command.config.module.main + ' ⟹  Other', true);
		}

		// Show the commands Restrictions
		e.addField('Restrictions', restriction(), true);

		return message.channel.send(e);
	} else {
		let cmd = 'command-information',
			text = 'Please provide the command you would like help with.';
		return improperUsageWarn(cmd, message, data, text);
	}

	// Functions
	function restriction() {
		let text = '';
		if (command.config.settings.premium == true) text = 'Premium';
		if (command.config.settings.premium == false) {
			if (command.config.settings.restrictions == 0) text = 'Everyone';
			if (command.config.settings.restrictions == 1)
				text = `Guild Admins :: \`Permissions: "${command.config.settings.permissions}"\``;
			if (command.config.settings.restrictions == 2) text = 'Guild Owner';
			if (command.config.settings.restrictions == 3) text = 'Dev Team';
		}
		return text;
	}
};

module.exports.config = {
	cmd: {
		main: 'command-information',
		aliases: [
			'cmd-info',
			'command-info',
			'cmd-help',
			'command-help',
			'help-command',
			'help-cmd'
		]
	},
	info: {
		name: 'Command Information',
		usage: 'command-information <command>',
		aliases: 'command-help, help-command',
		description: 'Get help with some of the commands.'
	},
	module: {
		main: 'information',
		sub: 'help'
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
