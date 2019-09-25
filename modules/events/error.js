const { bot } = require('../../index');

bot.on('error', async err => {
	const { config, discord } = bot.tools
  
	const e = new discord.RichEmbed()
		.setTitle('❗Error!')
		.setColor(config.colors.warning)
		.setDescription(err)
		.setFooter(getTime())
	bot.channels.get("id", config.console).send(e);
	return console.log(err);
});

function getTime() {
	let date = new Date();

	if (date.getHours() >= 13) {
		return date.getHours() - 12 + ':' + date.getMinutes() + ' PM';
	} else {
		return date.getHours() + ':' + date.getMinutes() + ' AM';
	}
}
