module.exports = async (bot, message) => {
	const { userData, guildData } = bot.tools;
	let data = {},
		srv = {},
		person = {};

	if (message.channel.type == 'dm') {
		person = await userData(bot, message, srv);

		data = { person: person };
	} else {
		srv = await guildData(bot, message);
		person = await userData(bot, message, srv);

		data = { guild: srv, person: person };
	}

	return data;
};
