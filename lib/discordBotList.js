const { bot, creds, discordBotList } = require('./utilities'),
	discordBotList = new discordBotList(creds.discordBotList, bot);

// Optional events
discordBotList.on('posted', () => {
	console.log('Server count posted!');
});

discordBotList.on('error', e => {
	console.log(`Oops! ${e}`);
});

module.exports = discordBotList;
