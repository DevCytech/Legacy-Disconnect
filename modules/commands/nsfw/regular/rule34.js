module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { discord, config, xml, superagent } = tools;

	// Code
	if (!message.channel.nsfw) {
		return message.channel.send('Cannot send NSFW content in a SFW channel.');
	}
	const query = args.join('_');
	if (query < 1) {
		const { body } = await superagent
			.get('https://www.reddit.com/r/rule34.json?sort=top&t=week')
			.query({ limit: 800 });
		const allowed = !message.channel.nsfw
			? body.data.children
			: body.data.children.filter(post => post.data.over_18);
		if (!allowed.length) {
			return message.channel.send(
				'It seems we are out of fresh iamges for you!, Try again later.'
			);
		}
		const randomnumber = Math.floor(Math.random() * allowed.length);
		const e = new discord.RichEmbed()
			.setColor(0x00a2e8)
			.setTitle(allowed[randomnumber].data.title)
			.setImage(allowed[randomnumber].data.url);
		message.channel.send(e);
	} else {
		const { text } = await superagent
			.get('https://rule34.xxx/index.php')
			.query({
				page: 'dapi',
				s: 'post',
				q: 'index',
				tags: query,
				limit: 1
			});
		const { posts } = await xml.parseStringAsync(text);
		if (posts.$.count === '0') {
			return message.channel.send('No Results found for ' + query + '.');
		}
		const e = new discord.RichEmbed()
			.setTitle('Results for ' + query)
			.setImage(posts.post[0].$.file_url)
			.setColor(0x00a2e8);
		message.channel.send(e).catch(console.error);
	}
};

module.exports.config = {
	cmd: {
		main: 'rule34',
		aliases: ['r34']
	},
	info: {
		name: '',
		usage: '',
		aliases: '',
		description: ''
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
