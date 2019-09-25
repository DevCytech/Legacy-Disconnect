const { bot } = require('../../index');

bot.on('disconnect', async event => {
  const { config, discord } = bot.tools
  
  const e = new discord.RichEmbed()
    .setTitle('🎶 Disconnected!')
    .setColor(config.colors.warning)
    .setDescription(event)
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
