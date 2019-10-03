module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, superagent, creds, improperUsageWarn } = tools;
	const modeChoices = {
		standard: 0,
		taiko: 1,
		ctb: 2,
		mania: 3
	};
	const modes = {
		standard: 'osu!',
		taiko: 'Taiko',
		ctb: 'CTB',
		mania: 'osu!Mania'
	};
	let username, mode, find;
	
	// Code
	if (!args[0] || !args[0] == modeChoices) {
		return improperUsageWarn('osu', message, data)
	} else if (!args[1]) {
		return improperUsageWarn('osu', message, data)
	}
	mode = args[0]
	find = args.slice(1).join(' ').toLowerCase()
	
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'osu',
		aliases: ['osu-stats]
	},
	info: {
		name: 'osu! Player Stats',
		usage: 'osu <mode> <player>',
		aliases: 'osu-stats',
		description: 'Get the stats of an osu player.'
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
