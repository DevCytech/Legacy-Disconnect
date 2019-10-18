module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, fsn, canvas, superagent, errorWarn } = tools;
	// Code
	const { Canvas } = canvas;
	if (message.mentions.users.size < 1) {
		return errorWarn(message, "You didn't mention a user to waste.");
	}

	const getSlapped = async person => {
		const plate = await fsn.readFile('./assets/images/wasted.png');
		const png = person.replace('.gif', '.png');
		const { body } = await superagent.get(png);
		return new Canvas(300, 300)
			.resetTransformation()
			.addImage(body, 0, 0, 300, 300)
			.addImage(plate, 0, 0, 300, 300)
			.toBuffer();
	};

	try {
		const person = message.mentions.users.first().avatarURL;
		const result = await getSlapped(person);
		await message.channel.send({
			files: [{ attachment: result, name: 'wasted.png' }]
		});
	} catch (error) {
		throw error;
	}
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'wasted',
		aliases: []
	},
	info: {
		name: 'GTA V Wasted!',
		usage: 'wasted <@user>',
		aliases: '',
		description: 'Waste a user.'
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
