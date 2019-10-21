module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { fsn, canvas, superagent, errorWarn } = tools;

	// Code
	const { Canvas } = canvas;
	if (message.mentions.users.size < 1) {
		return errorWarn(message, "You didn't mention a user to trigger.");
	}

	const getSlapped = async person => {
		const plate = await fsn.readFile('./assets/images/respects.png');
		const png = person.replace('.gif', '.png');
		const { body } = await superagent.get(png);
		return new Canvas(330, 330)
			.addRect(0, 0, 720, 405)
			.setColor('#000000')
			.addImage(body, 110, 45, 90, 90)
			.resetTransformation()
			.addImage(plate, 0, 0, 720, 405)
			.toBuffer();
	};

	try {
		const person = message.mentions.users.first().avatarURL;
		const result = await getSlapped(person);
		await message.channel.send({
			files: [{ attachment: result, name: 'respects.png' }]
		});
	} catch (error) {
		throw error;
	}
};

module.exports.config = {
	cmd: {
		main: 'rest-in-peace',
		aliases: ['rip']
	},
	info: {
		name: 'Rest In Peace',
		usage: 'rest-in-peace <@user>',
		aliases: '',
		description: 'Show someone the respect they deserve.'
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
