module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	let user = message.mentions.users.first() || message.author;
	let member = message.guild.member(user);

	let types = {
		online: bot.emojis.get('628007152925147137'),
		offline: bot.emojis.get('628007152950181921'),
		dnd: bot.emojis.get('628007152585408514'),
		idle: bot.emojis.get('628007152945987604'),
		streaming: bot.emojis.get('628007153231331338')
	};

	let badges = ``,
		nitro,
		botStaff,
		botOwner;

	// Code
	const e = new discord.RichEmbed()
		.setTitle(`${user.username}'s Information`)
		.setColor(member.displayColor)
		.setThumbnail(user.avatarURL)
		.addField('User', `${member.displayName}, ${user.id}, ${user.tag}`);
	if (user.presence.status !== 'offline')
		e.addField(
			'Status',
			`${types[user.presence.status]} ${
				user.presence.game ? user.presence.game.name : 'None'
			}`
		);
	e.addField(
		'Economy',
		`:moneybag: Cash $${data.person.guild.eco.cash}, :bank: Bank: $${
			data.person.guild.eco.bank
		}, ${bot.emojis.get('628022021019795487')} Net Worth: $${
			data.person.guild.eco.net
		}`
	)
		.addField(
			'Experience',
			`Experience: ${data.person.guild.level.xp}, Level: ${data.person.guild.level.level}`
		)
		.addField(
			'Account Created',
			`${user.createdAt.toUTCString().substr(0, 16)} - ${checkDays(
				user.createdAt
			)}`,
			true
		)
		.addField(
			'Joined Server',
			`${member.joinedAt.toUTCString().substr(0, 16)} - ${checkDays(
				member.joinedAt
			)}`,
			true
		)
		.addField('Roles', member.roles.map(roles => `${roles}`).join(', '), true)
		.setFooter(user.tag + `'s Information`, user.avatarURL);
	return message.channel.send(e);

	// Functions
	function checkDays(date) {
		let now = new Date();
		let diff = now.getTime() - date.getTime();
		let days = Math.floor(diff / 86400000);
		return days + (days == 1 ? ' day' : ' days') + ' ago';
	}
};

module.exports.config = {
	cmd: {
		main: 'user-info',
		aliases: ['user-information']
	},
	info: {
		name: 'User Information',
		usage: 'user-info [@user]',
		aliases: '',
		description: 'Get information about a user in your guild.'
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
