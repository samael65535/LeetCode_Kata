/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
	var canWin = false;
	if (n % 4 == 0) canWin = false;
	else canWin = true;
	return canWin;
};
