const { bot, creds, discordBotList } = require('./utilities'),
	discordBotListClient = new discordBotList(creds.discordBotList, bot);

// Optional events
discordBotListClient.on('posted', () => {
	console.log('Server count posted!');
});

discordBotListClient.on('error', e => {
	console.log(`Oops! ${e}`);
});

module.exports = discordBotListClient;
