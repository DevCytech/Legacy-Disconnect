module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	let search = args[0],
		run,
		{ discord, config } = tools;
	// Code

	if (bot.botSubModules.indexOf(search) == -1) {
		if (bot.botModules.indexOf(search) == -1) {
			run = 'modules';
		} else {
			run = 'main';
		}
	} else {
		run = 'sub';
	}

	let e = new discord.RichEmbed().setColor(config.colors.main);

	if (run == 'modules') {
		e.setAuthor(`${config.info.bot.name}'s Modules`, bot.user.avatarURL);
		e.addField(
			'Information',
			`\`${getMainCount('information')}\` Command(s) Found!`,
			true
		);

		if (config.staff.developers.indexOf(message.author.id) == 0) {
			e.addField(
				'Developer',
				`\`${getMainCount('developer')}\` Command(s) Found!`,
				true
			);
		}
	}

	return message.channel.send(e);
	// Functions

	function getMainCount(txt) {
		let count = [];
		bot.commands.forEach(file => {
			if (file.config.module.main == txt) {
				count.push(count.length + 1);
			}
		});
		return count.length;
	}
};

module.exports.config = {
	cmd: {
		main: 'modules',
		aliases: []
	},
	info: {
		name: '',
		usage: '',
		aliases: '',
		description: ''
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
