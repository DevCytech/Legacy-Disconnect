module.exports = function(message, type, role) {
	const { bot } = require('../../index');
	const { discord, config } = bot.tools;
	const e = new discord.RichEmbed()
		.setTitle('Missing Role')
		.setColor(config.colors.error);

	if (role) {
		e.setDescription(
			`You are missing the ${type} role. \n\n • ${role.join('\n • ')}`
		);
		return message.channel.send(e);
	} else {
		return console.error('No Permission Specified!');
	}
};
