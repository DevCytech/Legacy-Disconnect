module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { errorWarn } = tools;
	// Code
	const deleteCount = parseInt(args[0], 10);

	if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
		let text =
			'You can not delete more than 100 messages at a time. You may not delete less than 2 messages at a time as well. `!purge <between 2 to 100>`';
		return errorWarn(message, text);
	}
	await message.delete;
	message.channel.bulkDelete(deleteCount).catch(err => {
		return errorWarn(message, err);
	});
};

module.exports.config = {
	cmd: {
		main: 'purge',
		aliases: ['clear', 'clean']
	},
	info: {
		name: 'Clean Messages',
		usage: 'purge <number of messages>',
		aliases: 'clear, clean',
		description: 'Delete a bunch of messages.'
	},
	module: {
		main: 'moderation',
		sub: ''
	},
	settings: {
		dm: false,
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: ['MANAGE_MESSAGES']
		}
	}
};
