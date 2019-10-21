/* NODE */

const { promisifyAll } = require('tsubaki');
module.exports.fs = require('fs');
module.exports.isgd = require('isgd');
module.exports.path = require('path');
module.exports.discord = require('discord.js');
module.exports.discordBotList = require('dblapi.js');
module.exports.superagent = require('superagent');
module.exports.figlet = require('figlet');
module.exports.randomPuppy = require('random-puppy');
module.exports.fsn = require('fs-nextra');
module.exports.canvas = require('canvas-constructor');
module.exports.letterTranslate = require('custom-translate').letterTrans;
module.exports.xml = promisifyAll(require('xml2js'));

/* WARNINGS */

module.exports.proWarn = require('../modules/functions/POST/not-premium');
module.exports.errorWarn = require('../modules/functions/POST/error');
module.exports.missingPermWarn = require('../modules/functions/POST/missing-perms');
module.exports.messingRoleWarn = require('../modules/functions/POST/missing-role');
module.exports.improperUsageWarn = require('../modules/functions/POST/bad-usage-error');

/* CONFIG */
module.exports.creds = require('../configs/creds.json');
module.exports.config = require('../configs/config.json');

/* SCHEMAS */
let schemas = {};

module.exports.guildStrut = require('./database').guild;
module.exports.userGuildStrut = require('./database').userGuilds;
module.exports.userGlobalStrut = require('./database').userGlobal;

/* DATA */

module.exports.allData = require('../modules/functions/data/all');
module.exports.userData = require('../modules/functions/data/user');
module.exports.guildData = require('../modules/functions/data/guild');
module.exports.botData = require('../data/data');

/* FUNCTIONS */

module.exports.runCC = require('../modules/functions/RUN/custom-commands');
module.exports.capitalize = require('../modules/functions/RUN/capitalize');

/* GET */

module.exports.leadPOS = require('../modules/functions/GET/leaderboard-positions');
module.exports.getTime = require('../modules/functions/GET/time');
module.exports.unique = require('../modules/functions/GET/unique');
module.exports.getUptime = require('../modules/functions/GET/uptime');

/* MANAGERS */

module.exports.commandManager = require('./managers/command');
module.exports.database = require('../lib/database');
module.exports.dbl = require('./discordBotList');

/* METHODS */

module.exports.checkPermissions = require('../modules/functions/methods/permissions');
module.exports.verifyPermission = require('../modules/functions/methods/verifyPermissions');
module.exports.checkPremium = require('../modules/functions/methods/premium');
module.exports.manageDM = require('../modules/functions/methods/manageDM');
