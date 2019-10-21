module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	const { config, discord, superagent, improperUsageWarn, capitalize } = tools;
	// Code
	let chart = args;
	if (args.length !== 0) {
		let pokemon = await superagent.get(
			`https://some-random-api.ml/pokedex?pokemon=${chart}`
		);
		pokemon = pokemon.body;
		const e = new discord.RichEmbed()
			.setTitle(`${capitalize(pokemon.name)}'s Information`)
			.setColor('ff1111')
			.setDescription(pokemon.description)
			.addField(
				'Basic Information',
				`ID: ${pokemon.id} \nGeneration ${pokemon.generation}`,
				true
			)
			.addField('Species', pokemon.species, true)
			.addField('Type', pokemon.type.join('\n'), true)
			.addField('Abilities', pokemon.abilities.join('\n'), true)
			.addField(
				'Height and Weight',
				`${pokemon.height} \n${pokemon.weight}`,
				true
			)
			.addField('Gender', pokemon.gender.join('\n'), true)
			.addField('Egg Group', pokemon.egg_groups.join('\n'), true)
			.addField('Base Experience', pokemon.base_experience, true)
			.addField(
				'Evolution',
				`Evolution Stage: ${
					pokemon.family.evolutionStage
				}, \nEvolution Line: ${pokemon.family.evolutionLine.join(' => ')}`,
				true
			)
			.addField(
				'Stats',
				`Heath: ${pokemon.stats.hp}\nAttack: ${pokemon.stats.attack}\nDefense: ${pokemon.stats.defense}\nSpeed Attack: ${pokemon.stats.sp_atk}\nSpeed Defend: ${pokemon.stats.sp_def}\nSpeed: ${pokemon.stats.speed}\nTotal:  ${pokemon.stats.total}`,
				true
			)
			.setThumbnail(
				'https://img.rankedboost.com/wp-content/uploads/2016/07/Pokemon-Go-Pok%C3%A9dex.png'
			);
		return message.channel.send(e);
	} else {
		return improperUsageWarn('lyrics', message, data);
	}
};

module.exports.config = {
	cmd: {
		main: 'pokedex',
		aliases: ['pokemon']
	},
	info: {
		name: 'Pokédex',
		usage: 'pokedex <pokemon>',
		aliases: 'pokemon',
		description: 'Get a pokémon from the pokédex.'
	},
	module: {
		main: 'integration',
		sub: 'game'
	},
	settings: {
		dm: false,
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
