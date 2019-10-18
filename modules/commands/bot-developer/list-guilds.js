module.exports.run = async (bot, message, args, tools, data) => {
	// Variables

	// Code
	let page = args[0];
	let guilds;

	if (!page) {
		page = 1;
	}

	const guildArray = bot.guilds.map((guild, index) => {
		console.log(guild.name);
		return ` • ${guild.id} :: ${guild.name.replace(
			/\'/,
			''
		)} - ${guild.members.size.toLocaleString()} Members`;
	});

	if (page == 1) {
		guilds = guildArray.slice(0, page * 100);
	} else {
		guilds = guildArray.slice(page * 100 - 1, page * 100);
	}
	return message.channel.send(
		`= PAGE #${page} of ${Math.floor(
			guildArray.length / 100 + 1
		)} = \n\n${guilds.join('\n')}`,
		{ code: 'asciidoc' }
	);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'list-guilds',
		aliases: ['all-guilds']
	},
	info: {
		name: 'List Guilds',
		usage: 'list-guilds [page]',
		aliases: 'all-guilds',
		description: 'Test the currently WIP Command!'
	},
	module: {
		main: 'developer',
		sub: 'information'
	},
	settings: {
		dm: false,
		restrictions: 3, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
