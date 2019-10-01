const { bot, creds, discordBotList } = require('./utilities'),
	dbl = new discordBotList(creds.discordBotList, bot);

// Optional events
dbl.on('posted', () => {
	console.log('Server count posted!');
});

dbl.on('error', e => {
	console.log(`Oops! ${e}`);
});

module.exports = dbl;
