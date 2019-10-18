module.exports = function(message, text) {
	const { discord, config } = require('../../../lib/utilities');
	let errorTime = getTime();
	const e = new discord.RichEmbed()
		.setTitle('An error has occurred.')
		.setDescription(text)
		.setFooter(`An error has occurred at ${errorTime}`)
		.setColor(config.colors.error);
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
