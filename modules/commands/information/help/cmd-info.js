module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	let cmd = args.shift(), { discord, config, improperUsageWarn } = tools, e = new discord.RichEmbed(), command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
	// Code
	if (command) {
		
		// Create the embed
		const e = new discord.RichEmbed()
	
		// Set the title on the embed
		if (command.config.info.name.includes('help')) {
			e.setTitle(command.config.info.name)
		} else {
			e.setTitle(command.config.info.name + ' Help')
		}
		
		// Set the command description
		e.setDescription(command.config.info.description)
		
		// Set the command callings
		e.addField('Command Ussage', command.config.info.ussage)
		
		// Set the aliases
		if (command.config.info.aliases !== '' || command.config.cmd.aliases.length !== 0) {
			e.addField('Aliases', command.config.info.aliases)
		}
		
		// Show the module
		if (command.config.module.sub !== '') {
			e.addField('Modules', command.config.module.main + ' ⟹ ' + command.config.module.sub)
		} else {
			e.addField('Module', command.config.module.main + ' ⟹  Other' )
		}
		
		// Show the commands Restrictions
		e.addField('Restrictions', restriction())
		
		return message.channel.send(e)
	} else {
		return improperUsageWarn('command-information', message, data, 'Please provide the command you would like help with.')
	}
	
	// Functions
	function restriction() {
		let text = ''
		if (command.config.settings.premium == true) text = 'Premium'
		if (command.config.settings.premium == false) {
			if (command.config.settings.restictions == 0) text = 'Everyone'
			if (command.config.settings.restictions == 1) text = `Guild Admins :: \`Permissions: "${command.config.settings.permissions: user.join('",  "')}"\``
			if (command.config.settings.restictions == 2) text = 'Guild Owner'
			if (command.config.settings.restictions == 3) text = 'Dev Team'
		}
		return text;
	}
};

module.exports.config = {
	cmd: {
		main: 'command-information',
		aliases: ['cmd-info', 'command-info', 'cmd-help', 'command-help', 'help-command', 'help-cmd']
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
		restrictions: '0', // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
