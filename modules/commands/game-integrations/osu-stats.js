module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, superagent, creds, improperUsageWarn } = tools;
	const modeChoices = {
		standard: 0,
		taiko: 1,
		ctb: 2,
		mania: 3,
		0: 0,
		1: 1,
		2: 2,
		3: 3
	};
	const modes = {
		standard: 'osu!',
		0: 'osu!',
		taiko: 'Taiko',
		1: 'Taiko',
		ctb: 'CTB',
		2: 'CTB',
		mania: 'osu!Mania',
		3: 'osu!Mania'
	};
	let username, mode, find;

	// Code
	if (!args[0] || !args[0] == modeChoices) {
		return improperUsageWarn('osu', message, data);
	} else if (!args[1]) {
		return improperUsageWarn('osu', message, data);
	}
	mode = args[0];
	find = args
		.slice(1)
		.join(' ')
		.toLowerCase();

	let res = await superagent.get(
		`https://osu.ppy.sh/api/get_user?k=${
			creds.apis.games.osu
		}&u=${encodeURIComponent(find)}&m=${modeChoices[args[0]]}`
	);
	let player = res.body[0];

	if (player) {
		const e = new discord.RichEmbed()
			.setAuthor(`${player.username}'s ${modes[mode]} Stats`)
			.setColor('FF69B4')
			.setThumbnail(
				'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Osu%21Logo_%282015%29.svg/220px-Osu%21Logo_%282015%29.svg.png'
			)
			.setDescription(`${player.user_id} has joined on ${player.join_date}.`)
			.addField('Performance Points', `\`${player.pp_raw}\``, true)
			.addField('Level', `\`${Math.floor(player.level)}\``, true)
			.addField(
				'Accuracy',
				`\`${Math.round(player.accuracy * 100) / 100}\``,
				true
			)
			.addField('Play Count', `\`${player.playcount}\``, true)
			.addField(
				'Score',
				`Total Score: \`${player.total_score}\`, Ranked Score: \`${player.ranked_score}\``,
				true
			)
			.addField(
				'Rank',
				`Global Rank: \`${player.pp_rank}\`, Country Rank: \`${player.pp_country_rank}\``,
				true
			)
			.addField(
				'Score Counts',
				`SS: \`${player.count_rank_ss}\`, SSH: \`${player.count_rank_ssh}\`, S: \`${player.count_rank_s}\`, SH \`${player.count_rank_sh}\`, A: \`${player.count_rank_a}\``,
				true
			);
		return message.channel.send(e);
	}
};

module.exports.config = {
	cmd: {
		main: 'osu',
		aliases: ['osu-stats']
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
