module.exports = async (bot, message) => {
  const { guildStrut } = bot.toolds.schema, config = bot.tools.config;
  let settings = {};
  
  try {
    settings = await guildStrut.findOne({ id: message.guild.id})
  } catch (err) {
    console.log(err)
  }
  
  if (settings == undefined || settings == null) {
    let config = new guildStrut({
      id: message.guild.id,
      name: message.guild.name,
      prefix: config.settings.prefix,
      restriction: 'roles+perms',
      disabled: {
        cmds: [],
        modules: [],
        channels: []
      },
      custom: {
        enabled: false,
        commands: Array
      },
      roles: {
        muted: String,
        mod: Array,
        dj: Array
      },
      level: {
        enabled: true,
        cooldown: 120000,
        chat: {
          max: 25,
          min: 10
        }
      },
      eco: {
        enabled: true,
        cooldown: 120000,
        chat: {
          max: 100,
          min: 10
        },
        default: {
          bank: 0,
          cash: 0
        }
      }
    });
    config.save
    let settings = config
  }
  
  let data = {main: settings};
  
  return data;
}
