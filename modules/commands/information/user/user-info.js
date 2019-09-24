module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord } = tools;
	// Code
	let user = message.mentions.users.first() || message.author;
	const muser = message.guild.member(user);

	const e = new discord.RichEmbed()
		.setTitle(user.username + `' Information`)
		.setColor(muser.displayColor)
		.setThumbnail(user.avatarURL);
	if (!muser.displayName == user.username) {
		e.addField('Display Name', muser.displayName, true);
	}
	e.addField('Username', user.username, true)
		.addField('Discriminator', user.discriminator, true)
		.addField('Discord tag', user.tag, true)
		.addField('ID', user.id, true)
		.addField('Status', user.presence.status, true)
		.addField(
			'Game',
			user.presence.game ? user.presence.game.name : 'None',
			true
		)
		.addField('Highest Role', muser.highestRole, true)
		.addField(
			'Account Created',
			`${user.createdAt.toUTCString().substr(0, 16)} - ${checkDays(
				user.createdAt
			)}`,
			true
		)
		.addField(
			'Joined Server',
			`${muser.joinedAt.toUTCString().substr(0, 16)} (${checkDays(
				muser.joinedAt
			)})`,
			true
		)
		.addField(
			'Roles',
			muser.roles.map(roles => `${roles.name}`).join(', @'),
			true
		)
		.setFooter(user.tag + `'s Information`, user.avatarURL);
	return message.channel.send(e);

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
		aliases: ['whois']
	},
	info: {
		name: 'User Information',
		usage: 'user-info [@user]',
		aliases: 'whois',
		description: 'Get information on yourself or a fellow discord user.'
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
