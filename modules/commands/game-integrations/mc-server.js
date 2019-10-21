module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent, improperUsageWarn } = tools;
	let status = {
		true: bot.emojis.get('628007152925147137'),
		false: bot.emojis.get('628007152950181921')
	};
	// Code
	let srv = args;
	if (args.length !== 0) {
		let server = await superagent.get(
			`https://mcapi.us/server/status?ip=${srv}`
		);
		server = server.body;
		if (server.status == 'error') {
			return improperUsageWarn('mc-server', message, data);
		} else {
			const e = new discord.RichEmbed()
				.setTitle(`${status[server.online]}${srv} Stats`)
				.setColor('00AA00')
				.setThumbnail(
					'https://gamepedia.cursecdn.com/minecraft_gamepedia/4/44/Grass_Block_Revision_6.png'
				)
				.addField(
					'Players',
					`Max: \`${server.players.max}\`, Playing: \`${server.players.now}\``,
					true
				)
				.addField('Server Information', `Name: ${server.server.name}`)
				.setImage(`http://status.mclive.eu/${srv}/${srv}/banner.png`);
			return message.channel.send(e);
		}
	} else {
		return improperUsageWarn('mc-server', message, data);
	}
};

module.exports.config = {
	cmd: {
		main: 'mc-server',
		aliases: ['minecraft-server', 'mc-server-stats', 'minecraft-server-stats']
	},
	info: {
		name: 'Minecraft Server Stats',
		usage: 'mc-server <server ip>',
		aliases: '',
		description: ''
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
