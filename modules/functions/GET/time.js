module.exports = function getTime() {
	let date = new date();

	if (date.getHours() >= 13) {
		return date.getHours() - 12 + ':' + date.getMinutes();
	} else {
		return date.getHours() + ':' + date.getMinutes();
	}
};
