# Templates

## Table of Context

1. [Events](#eventTemp)
2. [Methods](#methodTemp)
3. [Command](#cmdTemp)
4. [Database](#dataTemp)
   1. [Guild](#)
      1. [Logs](#)
      2. [Store](#)
      3. [Rewards](#)
   2. [Users](#)
      1. [Global](#)
      2. [Guilds](#)
      3. [Reviews](#)
      4. [Inventory](#)
   3. [Bot](#)
      1. [Keys](#)
5. [Functions](#funcTemp)

### Events <a name="eventTemp"></a>

### Methods <a name="methodTemp"></a>

### Commands <a name="cmdTemp"></a>

```js
module.exports.run = async (bot, message, args, tools, data) => {
	// Variables
	// Code
	// Functions
};

module.exports.config = {
	cmd: {
		main: '',
		aliases: ['']
	},
	info: {
		name: '',
		usage: '',
		aliases: '',
		description: ''
	},
	module: {
		main: '',
		sub: ''
	},
	settings: {
		restrictions: 0, // 0 - Everyone, 1 - Admin, 2 - Guild Owner, 3 - Dev Team
		premium: false,
		permissions: {
			bot: ['SEND_MESSAGES'],
			user: []
		}
	}
};
```

### Database <a name="dataTemp"></a>

### Functions <a name="funcTemp"></a>
