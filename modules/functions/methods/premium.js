module.exports = async function(bot, message, command, tools, data) {
	const { database, config, discord } = tools;
	let val,
		userDatabase = database.userGuilds;

	if (command.config.settings.premium === true) {
		let people = [];
		let premiumPeople = [];

		message.guild.members.forEach(member => {
			return people.push(member.user.id);
		});

		people = await userDatabase.find({ userID: people });

		people.forEach(person => {
			if (person.premium.end > Date.now()) {
				return people.pop(person);
			}
			return premiumPeople.push(person);
		});

		if (premiumPeople == undefined) {
			return (data = 'stop');
		}
		if (premiumPeople.length > 0) {
			return;
		} else {
			let ee = new discord.RichEmbed()
				.setTitle('Premium Command!')
				.setDescription(
					'To use this command, someone with premium is needed in your guild. Thinking about getting premium use `donate` and follow the instructions listed.'
				)
				.setColor(config.colors.error);
			message.channel.send(ee).then(msg => msg.delete(10000));
			return (data = 'stop');
		}
	} else {
		return;
	}
};
