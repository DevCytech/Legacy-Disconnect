const { bot } = require('../../index');

bot.on('guildDelete', async guild => {
	const { config, discord, getTime } = bot.tools;

	const e = new discord.RichEmbed()
		.setTitle('Guild Left!')
		.setColor(config.colors.error)
		.setDescription(`I have just left ${guild.name} with the id of ${guild.id}`)
		.setFooter(getTime());
	var channel = bot.channels.get('622619858600984586');
	if (channel == undefined || channel == null) {
		return;
	}
	channel.send(e);
});
