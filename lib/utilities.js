/* NODE */
let node = Object;

node.fs = require('fs');
node.path = require('path');
node.discord = require('discord.js');

/* CREDS */
let creds = require('../configs/creds.json');

/* MODULES */
module.exports.node = node;
module.exports.creds = creds;
