/* NODE */
let node = Object;

node.fs = require('fs');
node.path = require('path');
node.discord = require('discord.js');

/* WARNINGS */
let warn = {};

warn.pro = require('../modules/functions/POST/not-premium');
warn.error = require('../modules/functions/POST/error');
warn.missingPerm = require('../modules/functions/POST/missing-perms');
warn.messingRole = require('../modules/functions/POST/missing-role');

/* CREDS */
let creds = require('../configs/creds.json');

/* SCHEMAS */
let schemas = {};

schemas.guildStrut = require('./database.js').guild;
schemas.userGuildStrut = require('./database.js').userGuilds;
schemas.userGlobalStrut = require('./database.js').userGlobal;

/* DATA */
let database = {};

database.all = require('../modules/functions/data/all')
database.user = require('../modules/functions/data/user')
database.guild = require('../modules/functions/data/guild')

/* MODULES */
module.exports.node = node;
module.exports.warn = warn;
module.exports.creds = creds;
module.exports.schema = schemas;
module.exports.database = datbase;
