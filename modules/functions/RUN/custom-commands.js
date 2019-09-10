module.exports = function(message, tools, cmd) {
	const { config, discord } = tools;

	const e = new discord.RichEmbed()
		.setTitle(cmd.name)
		.setDescription(cmd.response)
		.setColor(config.colors.regular);
	return message.channel.send(e);
};
