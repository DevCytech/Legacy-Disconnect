module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord } = tools;
	let role =
		message.mentions.roles.first() ||
		message.guild.roles.get(args[0]) ||
		message.guild.roles.find(r => r.name == args.slice(1).join(' '));

	if (!role) {
		role = message.member.highestRole;
	}
	// Code
	const e = new discord.RichEmbed()
		.setTitle(`Role: ${role.name}`)
		.setColor(role.hexColor)
		.addField('ID', role.id, true)
		.addField('Members', role.members.size, true)
		.addField('HEX Code', role.hexColor, true)
		.addField('Creation Date', role.createdAt.toDateString(), true)
		.addField(
			'Bot Controls',
			`Managed: ${role.managed.toString()}, Editable: ${role.editable.toString()}`,
			true
		);
	e.setFooter(`${role.name}'s Information`);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'role-info',
		aliases: ['r-info']
	},
	info: {
		name: 'Role Information',
		usage: 'role-info [role]',
		aliases: '',
		description: 'Get information about a role.'
	},
	module: {
		main: 'information',
		sub: 'guild'
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
