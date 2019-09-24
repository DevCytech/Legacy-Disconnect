module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	// Code
	const guild = message.guild;
	function checkDays(date) {
		let now = new Date();
		let diff = now.getTime() - date.getTime();
		let days = Math.floor(diff / 86400000);
		return days + (days == 1 ? ' day' : ' days') + ' ago';
	}
	let verificationLevels = [
		'None',
		'Low',
		'Medium',
		'(╯°□°）╯︵  ┻━┻',
		'┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻'
	];
	let region = {
		brazil: ':flag_br: Brazil',
		'eu-central': ':flag_eu: Central Europe',
		singapore: ':flag_sg: Singapore',
		'us-central': ':flag_us: U.S. Central',
		sydney: ':flag_au: Sydney',
		'us-east': ':flag_us: U.S. East',
		'us-south': ':flag_us: U.S. South',
		'us-west': ':flag_us: U.S. West',
		'eu-west': ':flag_eu: Western Europe',
		'vip-us-east': ':flag_us: VIP U.S. East',
		london: ':flag_gb: London',
		amsterdam: ':flag_nl: Amsterdam',
		hongkong: ':flag_hk: Hong Kong',
		russia: ':flag_ru: Russia',
		southafrica: ':flag_za:  South Africa'
	};
	const e = new discord.RichEmbed()
		.setTitle(guild.name + `'s Information`)
		.setColor(config.colors.main)
		.addField(
			'Creator - Guild Owner',
			`${guild.owner.user.tag} (ID: ${guild.owner.user.id})`,
			true
		)
		.addField('Guild Region', region[guild.region], true)
		.addField('Guild ID', guild.id, true)
		.addField(
			'Guild Creation Date',
			`${guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(
				guild.createdAt
			)})`,
			true
		)
		.addField(
			'Members',
			'Humans: `' +
				guild.members.filter(member => !member.user.bot).size +
				'` \nBots: `' +
				guild.members.filter(member => member.user.bot).size +
				'` \nTotal: `' +
				guild.members.size +
				'`'
		)
		.addField('Channels', guild.channels.size, true)
		.addField('Roles', guild.roles.size, true)
		.addField('2FA/MFA Level', guild.mfaLevel, true)
		.setThumbnail(guild.iconURL);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'guild-info',
		aliases: ['server-info', 'guild-information', 'server-information']
	},
	info: {
		name: 'Guild Information',
		usage: 'guild-information',
		aliases: 'server-information',
		description: 'Get information about your active guild'
	},
	module: {
		main: 'information',
		sub: 'guild'
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
