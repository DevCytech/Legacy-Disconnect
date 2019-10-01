module.exports = async function(bot, message, command, tools, data) {
	let val,
		adminRoles = [],
		returned;
	const { checkPermissions, errorWarn, config } = tools;

	// Get Admin Roles
	data.guild.main.roles.modRoles.forEach(async roleID => {
		let role = message.guild.roles.find(role => role.id === roleID);
		if (role == null) {
			return;
		} else {
			adminRoles.push(role.name);
		}
	});
	// Checking the Restrictions
	if (command.config.settings.restrictions === 0) {
		// Everyone
		return;
	} else if (command.config.settings.restrictions === 1) {
		// Admins
		if (data.guild.main.settings.adminRestriction == 0) {
			// Permissions Required Only
			returned = checkPermissions(bot, messages, command, tools, data);
			if (returned == 'stop') {
				return (val = 'stop');
			} else {
				return;
			}
		} else if (data.guild.main.settings.adminRestriction == 1) {
			// Permissions Required + Roles
			returned = checkPermissions(bot, messages, command, tools, data);
			if (returned == 'stop') {
				return (val = 'stop');
			} else {
				if (!message.member.roles.some(r => adminRoles.includes(r.name))) {
					messingRoleWarn(message, adminRoles);
					return (val = 'stop');
				} else {
					return;
				}
			}
		} else if (data.guild.main.settings.adminRestriction == 2) {
			// Roles Only
			if (!message.member.roles.some(r => adminRoles.includes(r.name))) {
				messingRoleWarn(message, adminRoles);
				return (val = 'stop');
			} else {
				return;
			}
		} else {
			// Error
			errorWarn(
				message,
				'We are sorry for the inconvenience, but and error has occurred please try again later.'
			);
			return (val = 'stop');
		}
		return;
	} else if (command.config.settings.restrictions === 2) {
		//Guild Owners
		if (message.guild.owner.user.id == message.author.id) {
			return;
		} else {
			errorWarn(message, 'You must be the guild owner to use this command.');
			return (val = 'stop');
		}
	} else if (command.config.settings.restrictions === 3) {
		// Developers Only
		if (config.staff.developers.includes(message.author.id)) {
			return;
		} else {
			return (val = 'stop');
		}
	} else {
		// Error
		errorWarn(
			message,
			'We are sorry for the inconvenience, but and error has occurred please try again later.'
		);
		return (val = 'stop');
	}
};
