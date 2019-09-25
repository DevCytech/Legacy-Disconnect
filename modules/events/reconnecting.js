const { bot } = require('../../index');

bot.on('disconnect', async => {
  const { config, discord } = bot.tools
  
  const e = new discord.RichEmbed()
    .setTitle('🎶 Reconnecting!')
    .setColor(config.colors.success)
    .setDescription('Reconnecting!')
    .setFooter(getTime())
  return bot.channels.get("id", config.consoleAux).send(e);
});

function getTime() {
	let date = new Date();

	if (date.getHours() >= 13) {
		return date.getHours() - 12 + ':' + date.getMinutes() + ' PM';
	} else {
		return date.getHours() + ':' + date.getMinutes() + ' AM';
	}
}
