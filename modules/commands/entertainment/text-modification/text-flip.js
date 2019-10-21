module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, letterTranslate } = tools;
	let dictionary = {
		a: 'ɐ',
		b: 'q',
		c: 'ɔ',
		d: 'p',
		e: 'ǝ',
		f: 'ɟ',
		g: 'ƃ',
		h: 'ɥ',
		i: 'ᴉ',
		j: 'ɾ',
		k: 'ʞ',
		m: 'ɯ',
		n: 'u',
		p: 'd',
		q: 'b',
		r: 'ɹ',
		t: 'ʇ',
		u: 'n',
		v: 'ʌ',
		w: 'ʍ',
		y: 'ʎ',
		A: '∀',
		C: 'Ɔ',
		E: 'Ǝ',
		F: 'Ⅎ',
		G: 'פ',
		J: 'ſ',
		L: '˥',
		M: 'W',
		P: 'Ԁ',
		T: '┴',
		U: '∩',
		V: 'Λ',
		W: 'M',
		Y: '⅄',
		'1': 'Ɩ',
		'2': 'ᄅ',
		'3': 'Ɛ',
		'4': 'ㄣ',
		'5': 'ϛ',
		'6': '9',
		'7': 'ㄥ',
		'9': '6',
		',': "'",
		'.': '˙',
		"'": ',',
		'"': ',,',
		_: '‾',
		'&': '⅋',
		'!': '¡',
		'?': '¿',
		'`': ','
	};
	let text = args.join(' ');
	if (!text) {
		text = 'Sample Text.';
	}
	let flipped = letterTranslate(text, dictionary);

	// Code
	const e = new discord.RichEmbed()
		.setTitle(letterTranslate('Text Flipped', dictionary))
		.setColor(config.colors.secondary)
		.setDescription(flipped);
	return message.channel.send(e);
};

module.exports.config = {
	cmd: {
		main: 'flip-text',
		aliases: ['text-flip']
	},
	info: {
		name: 'Flip Text',
		usage: 'flip-text [text]',
		aliases: 'text-flip',
		description: 'Flip your text upside down.'
	},
	module: {
		main: 'entertainment',
		sub: 'text-modification'
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
