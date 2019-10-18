module.exports = function(bot, message, command, tools, data) {
	let missing = [], val;
	command.config.settings.permissions.user.forEach(permission => {
		if (!message.member.hasPermission(permission)) {
			missing.push(permission);
		}
	});
	if (missing.length > 0) {
		tools.missingPermWarn(bot, message, missing, 'user');
		return (val = 'stop');
	}
	return;
};
