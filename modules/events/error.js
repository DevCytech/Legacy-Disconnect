const { bot } = require('../../index');

bot.on('error', async err => {
	console.log(err);
});
