module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { fsn, canvas, superagent, errorWarn } = tools;

	// Code
	const { Canvas } = canvas;
	if (message.mentions.users.size < 1) {
		return errorWarn(message, "You didn't mention a user to trigger.");
	}

	const getSlapped = async person => {
		const plate = await fsn.readFile('./assets/images/triggered.png');
		const png = person.replace('.gif', '.png');
		const { body } = await superagent.get(png);
		return new Canvas(330, 330)
			.resetTransformation()
			.addImage(body, 0, 0, 330, 330)
			.addImage(plate, 0, 250, 350, 80)
			.toBuffer();
	};

	try {
		const person = message.mentions.users.first().avatarURL;
		const result = await getSlapped(person);
		await message.channel.send({
			files: [{ attachment: result, name: 'triggered.png' }]
		});
	} catch (error) {
		throw error;
	}
};

module.exports.config = {
	cmd: {
		main: 'trigger',
		aliases: []
	},
	info: {
		name: 'Trigger',
		usage: 'trigger <@user>',
		aliases: '',
		description: 'Trigger someone.'
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
