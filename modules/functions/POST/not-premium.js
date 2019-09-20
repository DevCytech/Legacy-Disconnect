module.exports = function(message, type, role, data) {
	const { bot } = require('../../index');
	const { discord, config } = bot.tools;
	const e = new discord.RichEmbed()
		.setTitle('Premium Command')
		.setColor(config.colors.error)
		.setDescription(
			`Sorry, but the command you are trying to use is a premium only command. If you wish to get a premium membership please use the \`${data.server.prefix}donate\` to donate and become a premium user.`
		);
	return message.channel
		.send(e)
		.then(msg => {
			msg.delete(10000);
		})
		.catch();
};
