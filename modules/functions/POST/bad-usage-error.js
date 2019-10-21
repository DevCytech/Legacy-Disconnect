module.exports = function(cmd, message, data, text) {
	const { discord, config, getTime } = require('../../../lib/utilities');
	const { bot } = require('../../../index');

	let errorTime = getTime();
	const e = new discord.RichEmbed()
		.setTitle('Improper Ussage:')
		.setDescription(
			`__Command Usage:__ ${data.guild.main.prefix}${
				bot.commands.get(cmd).config.info.usage
			}`
		)
		.setFooter(`An error has occurred at ${getTime()}`)
		.setColor(config.colors.error);
	if (text) {
		e.setDescription(
			`__Command Ussage:__ ${data.guild.main.prefix}${
				bot.commands.get(cmd).config.info.usage
			} \n__Additional Information:__ ${text}`
		);
	}
	return message.channel.send(e);
};
