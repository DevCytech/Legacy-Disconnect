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
			info: {
				users: message.guild.members.filter(member => !member.user.bot).size,
				bots: message.guild.members.filter(member => member.user.bot).size,
				channels: message.guild.channels.size
			},
			channels: {
				music: '',
				starboard: '',
				pollBoard: '',
				welcome: '',
				levelup: '',
				giveaway: '',
				logs: {
					economy: '',
					msg: {
						delete: '',
						edited: '',
						vcJoin: '',
						vcLeave: ''
					},
					server: {
						ban: '',
						join: '',
						kick: '',
						channel: '',
						role: '',
						nickname: ''
					}
				}
			},
			disabled: {
				cmds: [],
				modules: [],
				channels: []
			},
			roles: {
				admin: [],
				muted: '',
				dj: ''
			},
			leveling: {
				enabled: true
			},
			economy: {
				enabled: true,
				chat: {
					max: 10,
					min: 25
				},
				default: {
					cash: 0,
					bank: 0
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
