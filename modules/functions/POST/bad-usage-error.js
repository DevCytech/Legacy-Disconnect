module.exports = function(cmd, message, data, text) {
	const { discord, config } = require('../../../lib/utilities');
	const { bot } = require('../../../index');

	let command = bot.commands.get(cmd);
	let errorTime = getTime();
	const e = new discord.RichEmbed()
		.setTitle('Improper Ussage:')
		.setDescription(
			`__Command Usage:__ ${data.guild.main.prefix}${command.config.info.usage}`
		)
		.setFooter(`An error has occurred at ${errorTime}`)
		.setColor(config.colors.error);
	if (text) {
		e.setDescription(
			`__Command Ussage:__ ${data.guild.main.prefix}${command.config.info.usage} \n__Additional Information:__ ${text}`
		);
	}
	return message.channel.send(e);
};

function getTime() {
	let date = new Date();

	if (date.getHours() >= 13) {
		return date.getHours() - 12 + ':' + date.getMinutes() + ' PM';
	} else {
		return date.getHours() + ':' + date.getMinutes() + ' AM';
	}
}
