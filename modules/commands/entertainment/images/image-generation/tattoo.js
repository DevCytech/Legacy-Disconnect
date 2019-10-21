module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { fsn, canvas, superagent, errorWarn } = tools;

	// Code
	const { Canvas } = canvas;
	if (message.mentions.users.size < 1) {
		return errorWarn(message, "You didn't mention a user to trigger.");
	}

	const getSlapped = async person => {
		const plate = await fsn.readFile('./assets/images/tattoo.png');
		const png = person.replace('.gif', '.png');
		const { body } = await superagent.get(png);
		return new Canvas(684, 825)
			.setColor(0x00a2e8)
			.addRect(0, 0, 434, 675)
			.addImage(plate, 0, 0, 684, 825)
			.addImage(body, 200, 505, 271, 271, { type: 'round', radius: 125 })
			.toBuffer();
	};

	try {
		const person = message.mentions.users.first().avatarURL;
		const result = await getSlapped(person);
		await message.channel.send({
			files: [{ attachment: result, name: 'tattoo.png' }]
		});
	} catch (error) {
		throw error;
	}
};

module.exports.config = {
	cmd: {
		main: 'tattoo',
		aliases: []
	},
	info: {
		name: 'Tattoo',
		usage: 'tattoo <@user>',
		aliases: '',
		description: 'Make someone a tattoo.'
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
