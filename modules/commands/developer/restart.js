module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, creds } = tools;
	// Code
	message.channel
		.send('Restarting...')
		.then(console.clear())
		.then(msg => bot.destroy())
		.then(() => bot.login(creds.token))
		.then(console.log('Bot Restarted' + ` with ${bot.commands.size} commands.`))
		.then(message.channel.send('Bot Restarted!'))
		.then(require('../../../lib/database'));
};

module.exports.config = {
	cmd: {
		main: 'restart',
		aliases: ['reboot']
	},
	info: {
		name: 'Restart',
		usage: 'restart',
		aliases: 'reboot',
		description: 'Restart the bot.'
	},
	module: {
		main: 'developer',
		sub: 'tool'
	},
	settings: {
		restrictions: 3, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
