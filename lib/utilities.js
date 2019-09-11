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

/* MODULES */
module.exports.node = node;
module.exports.warn = warn;
module.exports.creds = creds;
