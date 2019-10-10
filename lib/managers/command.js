const { fs, path, unique } = require('../utilities');

function find_nested(dir, pattern) {
	let results = [];

	fs.readdirSync(dir).forEach(inner_dir => {
		inner_dir = path.resolve(dir, inner_dir);
		const stat = fs.statSync(inner_dir);

		if (stat.isDirectory()) {
			results = results.concat(find_nested(inner_dir, pattern));
		}

		if (stat.isFile() && inner_dir.endsWith(pattern)) {
			results.push(inner_dir);
		}
	});

	return results;
}

const cmd_files = find_nested('./modules/commands/', '.js');

module.exports = (bot, discord) => {
	bot.commands = new discord.Collection();
	bot.aliases = new discord.Collection();
	bot.botModules = [];
	bot.botSubModules = [];

	if (cmd_files.length <= 0) {
		console.log('There are no commands to load...');
	} else {
		cmd_files.forEach(file => {
			let props = require(file);
			bot.commands.set(props.config.cmd.main, props);
			props.config.cmd.aliases.forEach(alias => {
				bot.aliases.set(alias, props.config.cmd.main);
				if (alias.includes('-')) {
					alias = alias.replace(/-/, '_');
					bot.aliases.set(alias, props.config.cmd.main);
					alias = alias.replace(/_/, '=');
					bot.aliases.set(alias, props.config.cmd.main);
					alias = alias.replace(/=/, '+');
					bot.aliases.set(alias, props.config.cmd.main);
				}
				if (alias.includes('+')) {
					alias = alias.replace('+', '');
					bot.aliases.set(alias, props.config.cmd.main);
				}
			});
			bot.botModules.push(props.config.module.main);
			bot.botModules = unique(bot.botModules);
			bot.botSubModules.push(props.config.module.sub);
			bot.botSubModules = unique(bot.botSubModules);
		});
		console.log(`Loaded ${cmd_files.length} commands`);
	}

	fs.readdir('./modules/events/', (err, files) => {
		if (err) console.log(err);
		let jsfiles = files.filter(f => f.split('.').pop() === 'js');
		if (jsfiles.length <= 0) {
			return console.log('There are no events to load...');
		}
		console.log(`Loading ${jsfiles.length} events`);
		jsfiles.forEach((f, i) => {
			require(`../../modules/events/${f}`);
		});
	});
};
