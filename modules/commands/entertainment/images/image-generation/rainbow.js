module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { fsn, canvas, superagent, errorWarn } = tools;

	// Code
	const { Canvas } = canvas;
	if (message.mentions.users.size < 1) {
		return errorWarn(message, "You didn't mention a user to trigger.");
	}

	const getSlapped = async person => {
		const plate = await fsn.readFile('./assets/images/rainbow.png');
		const png = person.replace('.gif', '.png');
		const { body } = await superagent.get(png);
		return new Canvas(250, 250)
			.resetTransformation()
			.addImage(body, 0, 0, 250, 250)
			.addImage(plate, 0, 0, 250, 250)
			.toBuffer();
	};

	try {
		const person = message.mentions.users.first().avatarURL;
		const result = await getSlapped(person);
		await message.channel.send({
			files: [{ attachment: result, name: 'rainbow.png' }]
		});
	} catch (error) {
		throw error;
	}
};

module.exports.config = {
	cmd: {
		main: 'rainbow',
		aliases: ['gay-pride']
	},
	info: {
		name: 'Rainbow',
		usage: 'rainbow <@user>',
		aliases: '',
		description: 'Make someone have a rainbow over them.'
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
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
