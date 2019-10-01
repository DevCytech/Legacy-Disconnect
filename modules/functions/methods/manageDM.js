module.exports = async function(bot, message, command, tools, data) {
	const { errorWarn } = tools;
	if (command.config.settings.dm == false) {
		// Error
		errorWarn(
			message,
			'You must use this command in a discord guild. The command is not available in direct messages.'
		);
		return (val = 'stop');
	} else if (command.config.settings.dm == true) {
		return;
	} else {
		// Error
		errorWarn(
			message,
			'We are sorry for the inconvenience, but and error has occurred please try again later.'
		);
		return (val = 'stop');
	}
};
