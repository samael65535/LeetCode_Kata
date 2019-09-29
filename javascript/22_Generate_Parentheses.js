/**
 * @param {number} n
 * @return {string[]}
 */
var ret;
var generateParenthesis = function (n) {
	var str = "";
	ret = [];
	getParenthesis(str, 0, 0, n);
	return ret;
};

var getParenthesis = function (str, l, r, n) {
	if (l == r && l == n) {
		ret.push(str)
	} else {
		if (l < n) {
			getParenthesis(str + "(", l + 1, r, n);
		}
		if (l > r) {
			getParenthesis(str + ")", l, r + 1, n);
		}
	}
}

//generateParenthesis(3);
