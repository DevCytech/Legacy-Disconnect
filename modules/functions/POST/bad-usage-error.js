module.exports = function(cmd, message, data, text) {
	const { discord, config } = require('../../lib/utils');
	let errorTime = getTime();
	const e = new discord.RichEmbed()
		.setTitle('An error has occurred.')
		.setDescription(text + ` Command Ussage: ${data.guild.main.prefix}${cmd.config.info.usage}`)
		.setFooter(`An error has occurred at ${errorTime}`)
		.setColor(config.colors.error);
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
