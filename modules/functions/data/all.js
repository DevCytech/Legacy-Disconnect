module.exports = async (bot, message) => {
  const {discord} = bot.tools.node, {user, guild} = bot.tools.database;
  let data = {};
  
  data.guild = await guild(bot, message)
  data.user = await user(bot, message)
  
  return data;
}
