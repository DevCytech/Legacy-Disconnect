const { bot } = require('../../index');

bot.on('disconnect', async event => {
	const { config, discord, getTime } = bot.tools;

	const e = new discord.RichEmbed()
		.setTitle('🎶 Disconnected!')
		.setColor(config.colors.warning)
		.setDescription(event)
		.setFooter(getTime());
	var channel = bot.channels.get('622619858600984586');
	if (channel == undefined || channel == null) {
		return;
	}
	channel.send(e);
});
