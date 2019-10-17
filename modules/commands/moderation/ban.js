module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, improperUsageWarn, errorWarn } = tools;
	let e = new discord.RichEmbed()
		.setTitle('Successfully banned!')
		.setColor(config.colors.success);

	let user = message.mentions.users.first() || bot.users.get(args[0]);
	let member = message.guild.members.get(user.id);
	let reason = args.slice(1).join(' ');

	// Code
	if (user) {
		if (user.id !== message.author.id) {
			if (user.id !== message.guild.owner.id) {
				member
					.ban({
						reason: `Was banned by ${message.author.tag} ${
							!reason ? '' : ` for the reason: ${reason}.`
						}`
					})
					.then(() => {
						e.setDescription(
							`${user.tag} has been banned from the guild by ${
								message.author.tag
							} ${!reason ? '' : `for the reason: ${reason}`}!`
						);
						return message.channel.send(e);
					})
					.catch(err => {
						return errorWarn(message, err);
					});
			} else {
				return improperUsageWarn(
					'ban',
					message,
					data,
					'You can not ban the all mighty guild owner.'
				);
			}
		} else {
			return improperUsageWarn(
				'ban',
				message,
				data,
				'You can not ban yourself.'
			);
		}
	} else {
		return improperUsageWarn(
			'ban',
			message,
			data,
			'Please specify a user you would like to ban either by mentioning them or typing their ID'
		);
	}
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'ban',
		aliases: []
	},
	info: {
		name: 'Ban',
		usage: 'ban <user> [reason]',
		aliases: '',
		description: 'Ban a user in the guild.'
	},
	module: {
		main: 'moderation',
		sub: ''
	},
	settings: {
		dm: false,
		restrictions: 1, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: ['BAN_MEMBERS']
		}
	}
};
