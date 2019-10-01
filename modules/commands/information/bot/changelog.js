module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config } = bot.tools;
	// Code
	message.channel.send(`
    >>> **:pushpin: Version ${config.settings.version}**
        - Completely Rebuilt from the Ground up, Database and all.
        - Completely new Economy System plus a new Leveling System.
        - Introduction into premium commands.
        - New API to give more unique commands,
        - New automatic systems including some automod and welcoming message.
    `);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'changelog',
		aliases: ['changes']
	},
	info: {
		name: 'Changelog',
		usage: 'changelog',
		aliases: 'changes',
		description:
			"View the changelog of Disconnect and see what's new, and what's changed."
	},
	module: {
		main: 'information',
		sub: 'bot'
	},
	settings: {
		dm: true,
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
