const { bot } = require('../../index');
function getTime() {
	let date = new Date();
	if (date.getMinutes() >= 9) {
		minutes = '0' + date.getMinutes();
	} else {
		minutes = date.getMinutes();
	}
	if (date.getHours() >= 13) {
		return date.getHours() - 12 + ':' + minutes + ' PM';
	} else {
		return date.getHours() + ':' + minutes + ' AM';
	}
}

bot.on('resume', async replayed => {
	const { config, discord } = bot.tools;

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
