module.exports = async (bot, message) => {
	const { discord } = bot.tools.node,
		{ user, guild } = bot.tools.database;
	let data = {},
		srv = {},
		user = {};

	srv = await guild(bot, message);
	user = await user(bot, message, srv);

  data = { guild: srv, person = user }
  
	return data;
};
