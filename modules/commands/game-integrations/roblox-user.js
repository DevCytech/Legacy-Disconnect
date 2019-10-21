module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, superagent, improperUsageWarn } = tools;
	let user = args.join('_');

	// Code
	if (user) {
		if (user.length > 1) {
			let uData = await superagent.get(
				`https://api.roblox.com/users/get-by-username?username=${user}`
			);
			if (!uData) {
				return improperUsageWarn(
					'roblox-user',
					message,
					data,
					'User could not be found. Please try again.'
				);
			}
			let check = await superagent.get(
				`https://api.roblox.com/ownership/hasasset?userId=${uData.body.Id}&assetId=102611803`
			);

			const e = new discord.RichEmbed()
				.setTitle(`Username + ${user}`)
				.setColor(config.colors.secondary)
				.addField('ID', uData.body.Id, true)
				.addField('Is Verified?', check.body, true)
				.setThumbnail(
					`http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&username=${user}`
				)
				.setImage(`https://roblox.com/Thumbs/BCOverlay.ashx?username=${user}`)
				.setFooter(
					'Profile Link: ' + `https://web.roblox.com/users/${uData}/profile`
				);
			return message.channel.send(e);
		} else {
			return improperUsageWarn(
				'roblox-user',
				message,
				data,
				'Please enter a valid roblox username.'
			);
		}
	} else {
		return improperUsageWarn(
			'roblox-user',
			message,
			data,
			'Please enter a valid roblox username.'
		);
	}
};

module.exports.config = {
	cmd: {
		main: 'roblox-user',
		aliases: ['roblox']
	},
	info: {
		name: 'Roblox User',
		usage: 'roblox-user <username>',
		aliases: 'roblox',
		description: 'Get a users information about a user.'
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
