const { bot } = require('../../index');

bot.on('reconnecting', async => {
	const { config, discord, getTime } = bot.tools;

	const e = new discord.RichEmbed()
		.setTitle('🎶 Reconnecting!')
		.setColor(config.colors.success)
		.setDescription('Reconnecting!')
		.setFooter(getTime());
	var channel = bot.channels.get('622619858600984586');
	if (channel == undefined || channel == null) {
		return;
	}
	channel.send(e);
});
