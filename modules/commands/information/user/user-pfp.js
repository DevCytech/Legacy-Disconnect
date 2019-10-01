module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord } = tools;
	let user = message.mentions.users.first() || message.author;

	// Code
	const e = new discord.RichEmbed()
		.setTitle(`${message.guild.member(user).displayName}'s Avatar`)
		.setColor(message.guild.member(user).displayColor)
		.setDescription(`image url: ${user.avatarURL}`)
		.setImage(user.avatarURL);
	return message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'profile-picture',
		aliases: ['pfp', 'avatar']
	},
	info: {
		name: 'Profile Picture',
		usage: 'profile-picture [@user]',
		aliases: 'pfp and avatar',
		description: 'Get the profile picture of another user in your guild.'
	},
	module: {
		main: 'information',
		sub: 'user'
	},
	settings: {
		dm: false,
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
