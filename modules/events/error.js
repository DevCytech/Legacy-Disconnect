const { bot } = require('../../index');

bot.on('error', async err => {
	const { config, discord, getTime } = bot.tools;

	const e = new discord.RichEmbed()
		.setTitle('❗Error!')
		.setColor(config.colors.warning)
		.setDescription(err)
		.setFooter(getTime());
	var channel = bot.channels.get('622619858600984586');
	if (channel == undefined || channel == null) {
		return;
	}
	channel.send(e);
});
