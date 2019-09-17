/* NODE */

module.exports.fs = require('fs');
module.exports.path = require('path');
module.exports.discord = require('discord.js');

/* WARNINGS */

module.exports.proWarn = require('../modules/functions/POST/not-premium');
module.exports.errorWarn = require('../modules/functions/POST/error');
module.exports.missingPermWarn = require('../modules/functions/POST/missing-perms');
module.exports.messingRoleWarn = require('../modules/functions/POST/missing-role');
module.exports.improperUsageWarn = require('../modules/functions/POST/bad-usage-error')

/* CONFIG */
module.exports.creds = require('../configs/creds.json');
module.exports.config = require('../configs/config.json');

/* SCHEMAS */
let schemas = {};

module.exports.guildStrut = require('./database.js').guild;
module.exports.userGuildStrut = require('./database.js').userGuilds;
module.exports.userGlobalStrut = require('./database.js').userGlobal;

/* DATA */

module.exports.allData = require('../modules/functions/data/all');
module.exports.userData = require('../modules/functions/data/user');
module.exports.guildData = require('../modules/functions/data/guild');

/* FUNCTIONS */

module.exports.runCC = require('../modules/functions/RUN/custom-commands');

/* MANAGERS */

module.exports.commandManager = require('./managers/command');
