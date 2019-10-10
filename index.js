const { discord, creds, commandManager } = require('./lib/utilities'),
	bot = new discord.Client({ disabledEveryone: true });

commandManager(bot, discord);
bot.tools = require('./lib/utilities');

bot.login(creds.bot.token);

module.exports.bot = bot;
