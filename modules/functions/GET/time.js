module.exports = function getTime() {
	function getTime() {
	let date = new Date();
	if (date.getMinutes() >= 9) {
		minutes = '0' + date.getMinutes();
	} else {
		minutes = date.getMinutes();
	}
	if (date.getHours() >= 13) {
		return date.getHours() - 12 + ':' + minutes + ' PM';
	} else {
		return date.getHours() + ':' + minutes + ' AM';
	}
}
};
