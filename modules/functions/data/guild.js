module.exports = async (bot, message) => {
	const { guildStrut, config } = bot.tools;
	let settings = {};

	try {
		settings = await guildStrut.findOne({ id: message.guild.id });
	} catch (err) {
		console.log(err);
	}

	if (settings == undefined || settings == null) {
		let newConfig = new guildStrut({
			id: message.guild.id,
			name: message.guild.name,
			prefix: config.settings.prefix,
			restriction: 'roles+perms',
			disabled: {
				cmds: [],
				modules: [],
				channels: []
			},
			custom: {
				enabled: false,
				commands: []
			},
			roles: {
				muted: '',
				mod: [],
				dj: []
			},
			level: {
				enabled: true,
				cooldown: 120000,
				chat: {
					max: 25,
					min: 10
				}
			},
			eco: {
				enabled: true,
				cooldown: 120000,
				chat: {
					max: 100,
					min: 10
				},
				default: {
					bank: 0,
					cash: 0
				}
			},
			settings: {
				adminRestriction: 0
			}
		});
		newConfig.save();
		settings = newConfig;
	}

	let data = { main: settings };

	return data;
};
