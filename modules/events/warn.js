const { bot } = require('../../index');

bot.on('warn', async info => {
	const { config, discord, getTime } = bot.tools;

	const e = new discord.RichEmbed()
		.setTitle('⚠️ Warning!')
		.setColor(config.colors.warning)
		.setDescription(info)
		.setFooter(getTime());
	var channel = bot.channels.get('622619858600984586');
	if (channel == undefined || channel == null) {
		return;
	}
	channel.send(e);
});
