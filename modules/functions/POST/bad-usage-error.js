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
	if (date.getMinutes() >= 9) {
		minutes = '0' + date.getMinutes();
	} else {
		minutes = date.getMinutes();
	}
	if (date.getHours() >= 13) {
		return date.getHours() - 12 + ':' + minutes + ' PM';
	} else {
		return date.getHours() + ':' + minutes + ' AM';
	}
}
