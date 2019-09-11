const { bot } = require('../../index');

bot.on('error', async message => {
    const { config, database } = bot.tools, data;
    
    if (config.settings.restriction == 1 && config.staff.developers.indexOf(message.author.id) !== -1 && config.settings.restriction == 1 && config.staff.testers.indexOf(message.author.id) !== -1) {
        return
    }
    if (config.settings.restriction == 2 && config.staff.developers.indexOf(message.author.id) !== -1) {
        return
    }
    
    let data = database.all(bot, message)
    // Data Format { guild, userGlobal, userGuild }
});
