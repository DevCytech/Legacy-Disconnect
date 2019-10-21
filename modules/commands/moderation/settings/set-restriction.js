module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, guildStrut, improperUsageWarn } = tools;
	let choices = [
		'role',
		'perms',
		'roles',
		'permissions',
		'p',
		'r',
		'both',
		'b'
	];
	let convert = {
		role: 2,
		perms: 0,
		roles: 2,
		permissions: 0,
		p: 0,
		r: 2,
		both: 1,
		b: 1
	};
	let revConvert = {
		0: 'Permissions Required Only',
		1: 'Permissions and Roles Required',
		2: 'Roles Required Only'
	};

	// Code
	if (choices.includes(args[0])) {
		let val = convert[args[0]];
		guildStrut
			.findOneAndUpdate(
				{ id: message.guild.id },
				{ settings: { adminRestriction: val } }
			)
			.then(function() {
				let success = new discord.RichEmbed()
					.setTitle('Admin Command Restriction Changed!')
					.setDescription(
						`Admin command restriction has now been changed to ${revConvert[val]}`
					)
					.setColor(config.colors.success);
				message.channel.send(success);
			});
	} else {
		return improperUsageWarn(
			'set-restriction',
			message,
			data,
			'please specify if you would like to change the restriction to `roles`, `permissions`, or `both`'
		);
	}
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'set-restriction',
		aliases: [
			'change-restriction',
			'set-admin-restriction',
			'change-admin-restriction'
		]
	},
	info: {
		name: 'Set Admin Command Restriction',
		usage: 'set-restriction <roles/permissions/both>',
		aliases:
			'change-restriction, set-admin-restriction, change-admin-restriction',
		description:
			'Change the admin restriction for commands form either needing permission or certain roles, or both.'
	},
	module: {
		main: 'moderation',
		sub: 'settings'
	},
	settings: {
		dm: false,
		restrictions: 2, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: ['MANAGE_GUILD']
		}
	}
};
