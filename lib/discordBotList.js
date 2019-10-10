const { bot, creds, discordBotList } = require('./utilities'),
	DBL = new discordBotList(creds.discordBotList, bot);

// Optional events
DBL.on('posted', () => {
	console.log('Server count posted!');
});

DBL.on('error', e => {
	console.log(`Oops! ${e}`);
});

module.exports = DBL;
