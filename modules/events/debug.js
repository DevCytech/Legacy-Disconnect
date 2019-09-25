const { bot } = require('../../index');

bot.on('debug', async info => {
	const { config, discord } = bot.tools
  
  const e = new discord.RichEmbed()
    .setTitle('Debug Information')
    .setColor(config.colors.regular)
    .setDescription(info)
    .setFooter(getTime())
  return bot.channels.get("id", config.console).send(e);
});

function getTime() {
	let date = new Date();

	if (date.getHours() >= 13) {
		return date.getHours() - 12 + ':' + date.getMinutes() + ' PM';
	} else {
		return date.getHours() + ':' + date.getMinutes() + ' AM';
	}
}
