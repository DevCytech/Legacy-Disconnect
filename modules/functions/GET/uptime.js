module.exports = function(bot) {
	/* Variables */
	let uptime,
		totalSeconds = bot.uptime / 1000,
		days = Math.floor(totalSeconds / 86400),
		hours = Math.floor(totalSeconds / 3600 - days * 24);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60),
		seconds = Math.floor(totalSeconds % 60);

	// Getting the uptime
	getDays();

	// If the bot just started and uptime is 0:0:0:0 then say this
	if (uptime == undefined) uptime = 'I just started up!';

	// Return the uptime
	return uptime;

	/* Functions */
	function getDays() {
		if (days >= 1) {
			if (days == 1) {
				uptime = '1 Day';
				getHours();
			} else {
				uptime = `${days} Days`;
				getHours();
			}
		} else {
			getHours();
		}
	}

	function getHours() {
		if (hours >= 1) {
			if (hours == 1) {
				if (uptime !== undefined) {
					uptime = uptime + ', 1 Hour';
					getMinutes();
				} else {
					uptime = '1 Hour';
					getMinutes();
				}
			} else {
				if (uptime !== undefined) {
					uptime = uptime + `, ${hours} Hours`;
					getMinutes();
				} else {
					uptime = `${hours} Hours`;
					getMinutes();
				}
			}
		} else {
			getMinutes();
		}
	}

	function getMinutes() {
		if (minutes >= 1) {
			if (minutes == 1) {
				if (uptime !== undefined) {
					uptime = uptime + ', 1 Minute';
					getSeconds();
				} else {
					uptime = '1 Minute';
					getSeconds();
				}
			} else {
				if (uptime !== undefined) {
					uptime = uptime + `, ${minutes} Minutes`;
					getSeconds();
				} else {
					uptime = `${minutes} Minutes`;
					getSeconds();
				}
			}
		} else {
			getSeconds();
		}
	}

	function getSeconds() {
		if (seconds >= 1) {
			if (seconds == 1) {
				if (uptime !== undefined) {
					uptime = uptime + ', 1 Second';
				} else {
					uptime = '1 Second';
				}
			} else {
				if (uptime !== undefined) {
					uptime = uptime + `, ${seconds} Seconds`;
				} else {
					uptime = `${seconds} Seconds`;
				}
			}
		}
	}
};
