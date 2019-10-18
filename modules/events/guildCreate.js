const { bot } = require('../../index');

bot.on('guildCreate', async guild => {
	const { config, discord, getTime } = bot.tools;

	const e = new discord.RichEmbed()
		.setTitle('New Guild Joined!')
		.setColor(config.colors.success)
		.setDescription(
			`I have just joined ${guild.name} with the id of ${guild.id}`
		)
		.setFooter(getTime());
	var channel = bot.channels.get('622619858600984586');
	if (channel == undefined || channel == null) {
		return;
	}
	channel.send(e);
});
