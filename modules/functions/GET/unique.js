module.exports = function(string) {
	return string.filter((e, i) => string.indexOf(e) >= i);
};
