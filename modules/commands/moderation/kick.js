module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, improperUsageWarn, errorWarn } = tools;
	let e = new discord.RichEmbed()
		.setTitle('Successfully Kicked!')
		.setColor(config.colors.success);

	let user = message.mentions.users.first() || bot.users.get(args[0]);
	let member = message.guild.members.get(user.id);
	let reason = args.slice(1).join(' ');

	// Code
	if (user) {
		if (user.id !== message.author.id) {
			if (user.id !== message.guild.owner.id) {
				member
					.kick({
						reason: `Was kicked by ${message.author.tag} ${
							reason ? '' : ` for the reason: ${reason}.`
						}`
					})
					.then(() => {
						e.setDescription(
							`${user.tag} has been kicked from the guild by ${message.author.tag}!`
						);
						return message.channel.send(e);
					})
					.catch(err => {
						return errorWarn(message, err);
					});
			} else {
				return improperUsageWarn(
					'kick',
					message,
					data,
					'You can not kick the all mighty guild owner.'
				);
			}
		} else {
			return improperUsageWarn(
				'kick',
				message,
				data,
				'You can not kick yourself.'
			);
		}
	} else {
		return improperUsageWarn(
			'kick',
			message,
			data,
			'Please specify a user you would like to kick either by mentioning them or typing their ID'
		);
	}
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'kick',
		aliases: []
	},
	info: {
		name: 'Kick',
		usage: 'kick <user> [reason]',
		aliases: '',
		description: 'Kick a user in the guild.'
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
			user: ['KICK_MEMBERS']
		}
	}
};
