const { bot } = require('../../index');

bot.on('debug', async info => {
	const { config, discord, getTime } = bot.tools;

	const e = new discord.RichEmbed()
		.setTitle('Debug Information')
		.setColor(config.colors.regular)
		.setDescription(info)
		.setFooter(getTime());
	var channel = bot.channels.get('622619858600984586');
	if (channel == undefined || channel == null) {
		return;
	}
	channel.send(e);
});
