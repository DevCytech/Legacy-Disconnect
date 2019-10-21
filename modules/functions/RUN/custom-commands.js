module.exports = function(bot, message, cc) {
	const { config, discord } = bot.tools;

	const e = new discord.RichEmbed()
		.setTitle(cmd.name)
		.setDescription(cmd.response)
		.setColor(config.colors.regular);
	return message.channel.send(e);
};
