const { node, creds, managers } = require('./lib/utilities'),
	discord = node.discord,
	bot = new discord.Client({ disabledEveryone: true });

managers.commands(bot);
bot.tools = require('./lib/utilities');

bot.login(creds.token);

module.exports.bot = bot;
