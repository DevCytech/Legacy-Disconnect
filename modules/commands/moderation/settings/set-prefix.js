module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	let newPrefix = args[0];
	const { discord, config, guildStrut, improperUsageWarn } = tools;
	// Code
	if (!newPrefix) {
		return improperUsageWarn(
			'set-prefix',
			message,
			data,
			'Please do not use spaces otherwise the first argument will be used.'
		);
	} else {
		guildStrut
			.findOneAndUpdate({ id: message.guild.id }, { prefix: newPrefix })
			.then(function() {
				let success = new discord.RichEmbed()
					.setTitle('Prefix Changed!')
					.setDescription(
						'Prefix has been changed from `' +
							oldPrefix +
							'` to `' +
							newPrefix +
							'`'
					)
					.setColor(config.colors.success);
				message.channel.send(success);
			});
	}
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'set-prefix',
		aliases: ['change-prefix', 'prefix']
	},
	info: {
		name: 'Change Guild Prefix',
		usage: 'set-prefix <new prefix>',
		aliases: 'change-prefix, prefix',
		description: 'Change the prefix of your guild.'
	},
	module: {
		main: 'moderation',
		sub: 'settings'
	},
	settings: {
		dm: false,
		restrictions: 1, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: ['MANAGE_GUILD']
		}
	}
};
