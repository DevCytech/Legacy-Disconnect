module.exports = async (bot, message) => {
	const { userData, guildData } = bot.tools;
	let data = {},
		srv = {},
		person = {};

	srv = await guildData(bot, message);
	person = await userData(bot, message, srv);

	data = { guild: srv, person: person };
	return data;
};
