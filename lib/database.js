const mongoose = require('mongoose');

// Connect and keep Connection
mongoose.connect('mongodb://localhost/DevBot', {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});
mongoose.connection.once('open', function() {
	console.log('[MONGO] Connection established');
});
mongoose.connection.on('error', function(error) {
	console.error('[MONGO] Connection error:', error);
});

/* Guilds */
let guild = new mongoose.Schema({
	id: String,
	name: String,
	prefix: String,
	info: {
		users: Number,
		bots: Number,
		channels: Number
	},
	channels: {
		music: String,
		starboard: String,
		pollBoard: String,
		welcome: String,
		levelup: String,
		giveaway: String,
		logs: {
			economy: {
				channel: String,
				enabled: Boolean
			},
			leveling: {
				channel: String,
				enabled: Boolean
			},
			msg: {
				delete: {
					channel: String,
					enabled: Boolean
				},
				edited: {
					channel: String,
					enabled: Boolean
				},
				vcJoin: {
					channel: String,
					enabled: Boolean
				},
				vcLeave: {
					channel: String,
					enabled: Boolean
				}
			},
			server: {
				ban: {
					channel: String,
					enabled: Boolean
				},
				join: {
					channel: String,
					enabled: Boolean
				},
				kick: {
					channel: String,
					enabled: Boolean
				},
				channel: {
					channel: String,
					enabled: Boolean
				},
				role: {
					channel: String,
					enabled: Boolean
				},
				nickname: {
					channel: String,
					enabled: Boolean
				}
			},
			extra: {
				moderation: {
					channel: String,
					enabled: Boolean
				}
			}
		}
	},
	disabled: {
		cmds: Array,
		modules: Array,
		channels: Array
	},
	roles: {
		admin: Array,
		muted: String,
		dj: String
	},
	leveling: {
		enabled: Boolean
	},
	economy: {
		enabled: Boolean,
		chat: {
			max: Number,
			min: Number
		},
		default: {
			cash: Number,
			bank: Number
		}
	},
	settings: {
		adminRestriction: Number
	}
});

/* USERS - GLOBAL */
let userGlobal = new mongoose.Schema({
	id: String,
	name: String,
	review: Array,
	crystals: Number,
	premium: {
		end: Number,
		original: String,
		purchased: Array
	}
});

/* USERS - GUILDS */
let userGuilds = new mongoose.Schema({
	id: String,
	name: String,
	guild: String,
	eco: {
		cash: Number,
		bank: Number,
		net: Number
	},
	level: {
		xp: Number,
		level: Number
	}
});

/* Bot */
let botData = new mongoose.Schema({
	suggestions: Array,
	bugs: Array,
	commandUsage: Array
});

/* Exports */
module.exports.bot = mongoose.model('Bot', botData);
module.exports.guild = mongoose.model('Guild-Settings', guild);
module.exports.userGlobal = mongoose.model('User-Global', userGlobal);
module.exports.userGuilds = mongoose.model('User-Guilds', userGuilds);
