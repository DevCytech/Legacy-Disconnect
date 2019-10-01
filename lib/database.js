const mongoose = require('mongoose');

// Connect and keep Connection
mongoose.connect('mongodb://localhost/Outlook', {
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

/* GUILDS */
let guild = new mongoose.Schema({
	id: String,
	name: String,
	prefix: String,
	restriction: String, // Is Role || Role+Perms || Perms
	disabled: {
		cmds: Array,
		modules: Array,
		channels: Array
	},
	custom: {
		enabled: Boolean,
		commands: Array
	},
	roles: {
		muted: String,
		modRoles: Array,
		dj: Array
	},
	level: {
		enabled: Boolean,
		cooldown: Number,
		chat: {
			max: Number,
			min: Number
		}
	},
	eco: {
		enabled: Boolean,
		cooldown: Number,
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
		adminRestriction: Number,
		chatbot: {
			enabled: Boolean,
			channel: String
		}
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

/* Exports */
module.exports.guild = mongoose.model('Guild-Settings', guild);
module.exports.userGlobal = mongoose.model('User-Global', userGlobal);
module.exports.userGuilds = mongoose.model('User-Guilds', userGuilds);
