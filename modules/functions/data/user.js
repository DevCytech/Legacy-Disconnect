module.exports = async (bot, message) => {
  const { userGlobalStrut } = bot.toolds.schema, config = bot.tools.config;
  let settings = {};
  
  try {
    settings = await guildStrut.findOne({ id: message.guild.id})
  } catch (err) {
    console.log(err)
  }
}
