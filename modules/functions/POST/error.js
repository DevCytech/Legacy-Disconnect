module.exports = function(message, text) {
	const { discord, config, getTime } = require('../../../lib/utilities');
	const e = new discord.RichEmbed()
		.setTitle('An error has occurred.')
		.setDescription(text)
		.setFooter(`An error has occurred at ${getTime()}`)
		.setColor(config.colors.error);
	return message.channel.send(e);
};
