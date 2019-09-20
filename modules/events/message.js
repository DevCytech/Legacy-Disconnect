const { bot } = require('../../index');

bot.on('message', async message => {
	const { config, allData } = bot.tools;

	if (
		config.settings.restriction == 1 &&
		config.staff.developers.indexOf(message.author.id) !== -1 &&
		config.settings.restriction == 1 &&
		config.staff.testers.indexOf(message.author.id) !== -1
	) {
		return;
	}
	if (
		config.settings.restriction == 2 &&
		config.staff.developers.indexOf(message.author.id) !== -1
	) {
		return;
	}

	// Variables
	let data = await allData(bot, message); // Data Format { guild, userGlobal, userGuild }
	let prefix = data.guild.main.prefix;
	let args = message.content
			.slice(prefix.length)
			.trim()
			.split(' '),
		cmd = args.shift().toLowerCase(),
		command,
		tools = bot.tools;

	// Delete Empty Space Args
	for (var i = 0, l = args.length; i < l; i++) {
		if (args[i].match(/^[\s\t]{2,}$/) !== null) args.splice(i, 1);
	}

	// If it doesn't start with the prefix
	if (!message.content.startsWith(prefix)) return;

	// Define the command
	command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));

	// Custom Command Handler
	if (data.guild.main.custom.enabled == true) {
		if (
			data.guild.main.custom.commands == null ||
			data.guild.main.custom.commands.length
		)
			return;
		data.guild.main.custom.commands.forEach(cc => {
			if (cc.cmd == cmd) return bot.tools.functions.runCC(bot, message, cc);
		});
	}

	// If There is a Command
	if (command) return command.run(bot, message, args, tools, data);
});
