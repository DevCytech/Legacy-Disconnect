module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config } = tools;
	// Code
	let side = Math.floor(Math.random() * 2) + 1;

	const e = new discord.RichEmbed()
		.setTitle('Coin Flip...')
		.setColor(config.colors.secondary);

	if (side == '1') {
		e.setDescription('The coin has landed on... HEADS!!!');
		e.setThumbnail(
			'https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png'
		);
		message.channel.send(e);
	} else {
		e.setDescription('The coin has landed on... TAILS!!!');
		e.setThumbnail(
			'http://www.clker.com/cliparts/4/a/2/6/1393621733287511319tails-hi.png'
		);
		message.channel.send(e);
	}
	// Functions
};

module.exports.config = {
	cmd: {
		main: 'flip-coin',
		aliases: ['coin-flip', 'coin']
	},
	info: {
		name: 'Flip Coin',
		usage: 'flip-coin',
		aliases: 'flip, coin-flip',
		description: 'Flip a coin.'
	},
	module: {
		main: '',
		sub: ''
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
