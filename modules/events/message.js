const { bot } = require('../../index');

bot.on('message', async message => {
	if (message.author.bot) {
		return;
	}
	const {
		config,
		allData,
		checkPermissions,
		checkPremium,
		manageDM
	} = bot.tools;

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
	let prefix;
	let data = await allData(bot, message); // Data Format { guild, userGlobal, userGuild }
	if (message.channel.type !== 'dm') {
		prefix = data.guild.main.prefix;
	} else {
		prefix = config.settings.prefix;
	}
	let args = message.content
			.slice(prefix.length)
			.trim()
			.split(' '),
		cmd = args.shift().toLowerCase(),
		command,
		tools = bot.tools,
		val;

	// Delete Empty Space Args
	for (var i = 0, l = args.length; i < l; i++) {
		if (args[i].match(/^[\s\t]{2,}$/) !== null) {
			args.splice(i, 1);
		}
	}

	// If it doesn't start with the prefix
	if (!message.content.startsWith(prefix)) {
		return;
	}

	// Define the command
	command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));

	// Custom Commands *Not Working Rework needed

	// Pre Command Chechs
	if (message.channel.type !== 'dm') {
		if (!command) {
			return;
		}
		let test1 = await checkPermissions(bot, message, command, tools, data);
		let test2 = await checkPremium(bot, message, command, tools, data);
		if (test1 !== undefined || test2 !== undefined) {
			if (test1 === 'stop') {
				return;
			}
			if (test2 === 'stop') {
				return;
			}
		}
	} else {
		let test3 = await manageDM(bot, message, command, tools, data);
		if (test3 !== undefined) {
			if (test3 === 'stop') {
				return;
			}
		}
	}

	// If There is a Command
	if (command) {
		return command.run(bot, message, args, tools, data);
	}
});
