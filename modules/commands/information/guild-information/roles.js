module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	const role = message.guild.roles;
	// Code
	const e = new discord.RichEmbed()
		.setTitle('Server Roles')
		.setDescription(role.map(e => e).join(', '));
	if (data.guild.main.roles.admin.length >= 1) {
		e.addField(
			'Admin Roles',
			data.guild.main.roles.admin
				.map(e => message.guild.roles.get(e))
				.join(', ')
		);
	}
	e.setColor(config.colors.main);
	message.channel.send(e);
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'roles',
		aliases: ['guild-roles']
	},
	info: {
		name: 'Guild Roles',
		usage: 'roles',
		aliases: 'guild-roles',
		description: 'Get all the roles listed in the server.'
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
