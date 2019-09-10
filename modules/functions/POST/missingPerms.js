module.exports = function(message, permission, user) {
	const { bot } = require('../../index');
	const { discord, config } = bot.tools;

	if (permission) {
		const e = new discord.RichEmbed()
			.setTitle('Missing Permission')
			.setColor(config.colors.error);

		if (permission.length > 0) {
			if (user == 'bot') {
				e.setDescription(
					`I am missing the following permissions, \`${permission}\`.`
				);
				return message.channel.send(e);
			} else {
				e.setDescription(
					`You are missing the following permissions, \`${permission}\`.`
				);
				return message.channel.send(e);
			}
		} else {
			if (user == 'bot') {
				e.setDescription(
					`I am missing the following permissions, \`${permission.join(
						', '
					)}\`.`
				);
				return message.channel.send(e);
			} else {
				e.setDescription(
					`You are missing the following permissions, \`${permission.join(
						', '
					)}\`.`
				);
				return message.channel.send(e);
			}
		}
	} else {
		return console.error('No Permission Specified!');
	}
};
