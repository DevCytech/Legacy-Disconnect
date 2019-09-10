module.exports = async function(message, tools) {
	let people = [],
		database = tools.database.stats;

	people = await database.find({ guildID: message.guild.id });
	people.sort(sort);

	return `${people.findIndex(x => x.userID === message.author.id) + 1} / ${
		people.length
	}`;
	function sort(a, b) {
		const value1 = a.economy.net,
			value2 = b.economy.net;

		let comparison = 0;
		if (value1 > value2) {
			comparison = -1;
		} else if (value1 < value2) {
			comparison = 1;
		}
		return comparison;
	}
};
