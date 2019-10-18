const { bot } = require('../../index');

bot.on('resume', async replayed => {
	const { config, discord, getTime } = bot.tools;

	const e = new discord.RichEmbed()
		.setTitle('🎶 Resuming!')
		.setColor(config.colors.success)
		.setDescription('Resuming! ' + replayed)
		.setFooter(getTime());
	var channel = bot.channels.get('622619858600984586');
	if (channel == undefined || channel == null) {
		return;
	}
	channel.send(e);
});
