module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, superagent, errorWarn } = tools;
	// Code
	let achievement = args.join(' ');

	if (achievement) {
		if (achievement.length <= 25) {
			let { body } = await superagent
				.get('https://www.minecraftskinstealer.com/achievement/a.php')
				.query({
					i: 1,
					h: 'Achievement Get!',
					t: achievement
				});

			return message.channel.send({
				files: [{ attachment: body, name: 'achievement.png' }]
			});
		} else {
			return errorWarn(
				message,
				'The achievement may not have more than 25 characters.'
			);
		}
	} else {
		return errorWarn(
			message,
			'Please include an achievement you would like to get. '
		);
	}
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'achievement',
		aliases: ['mc-achievement']
	},
	info: {
		name: 'Minecraft Achievement',
		usage: 'achievement <text>',
		aliases: 'mc-achievement',
		description: 'Kick a user in the guild.'
	},
	module: {
		main: 'images',
		sub: 'image-generation'
	},
	settings: {
		dm: false,
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES', 'ATTACH_FILES'],
			user: []
		}
	}
};
