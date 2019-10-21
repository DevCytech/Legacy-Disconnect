module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, improperUsageWarn } = tools;
	let base = args[0];
	let amount = args[1];
	let bases = {
		fahrenheit: 'f',
		f: 'f',
		celsius: 'c',
		c: 'c',
		kelvin: 'k',
		k: 'k'
	};
	const e = new discord.RichEmbed()
		.setTitle('Temperature Converter')
		.setColor(config.colors.secondary)
		.setFooter('Numbers are rounded as they can get pretty big as decimals.')
		.setThumbnail(
			'https://pngriver.com/wp-content/uploads/2018/04/Download-Temperature-PNG-Clipart.png'
		);

	// Code
	if (!base || !bases[base]) {
		return improperUsageWarn(
			'temperature',
			message,
			data,
			'Please enter a valid base. The bases are `fahrenheit, celsius, and kelvin`'
		);
	} else if (!amount || isNaN(amount)) {
		return improperUsageWarn(
			'temperature',
			message,
			data,
			'Please enter a valid number.'
		);
	} else {
		amount = parseInt(amount);

		if (bases[base] == 'f') {
			e.setDescription(
				`${amount}°F is equal to ${Math.floor(
					(amount - 32) / 1.8
				)}°C,  ${Math.floor((amount + 459.67) * (5 / 9))}°K.`
			);
			return message.channel.send(e);
		} else if (bases[base] == 'c') {
			e.setDescription(
				`${amount}°F is equal to ${Math.floor(
					amount * 1.8 + 32
				)}°F, ${Math.floor(amount + 273.15)}°K.`
			);
			return message.channel.send(e);
		} else if (bases[base] == 'k') {
			e.setDescription(
				`${amount}°F is equal to ${Math.floor(amount - 273.15)}°C, ${Math.floor(
					amount * 1.8 - 459.67
				)}°F.`
			);
			return message.channel.send(e);
		} else {
			return improperUsageWarn(
				'temperature',
				message,
				data,
				'Please enter a valid base. The bases are `fahrenheit, celsius, and kelvin`'
			);
		}
	}
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'temperature',
		aliases: ['temp']
	},
	info: {
		name: 'Temperature',
		usage: 'temperature [base] [amount]',
		aliases: 'temp',
		description:
			'Convert a temperature to different measurements of temperature. `EX: !temperature fahrenheit 86`'
	},
	module: {
		main: 'utility',
		sub: 'calculator'
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
