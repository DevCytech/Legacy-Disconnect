module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	// Code
	let aUser = message.mentions.users.first() || message.author;
	const avatarEmbed = new discord.RichEmbed()
		.setTitle(`${message.guild.member(aUser).displayName}'s Avatar`)
		.setColor(config.colors.secondary)
		.setDescription(`image url: ${aUser.avatarURL}`)
		.setImage(aUser.avatarURL);
	return message.channel.send(avatarEmbed);
};

module.exports.config = {
	cmd: {
		main: 'profile-picture',
		aliases: ['avatar', 'pfp']
	},
	info: {
		name: 'Profile Picture',
		usage: 'profile-picture [@user]',
		aliases: 'avatar, pfp',
		description: 'Get the profile picture (avatar) of a user or yourself.'
	},
	module: {
		main: 'information',
		sub: 'user'
	},
	settings: {
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
