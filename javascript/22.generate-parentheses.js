/**
 * @param {number} n
 * @return {string[]}
 */


var generateParenthesis = function (n) {
	let ans = []
	if (n == 0) return []
	let helper = (l, r, tmp) => {
		// 左右括号数
		if (l == n && r == n) {
			ans.push(tmp)
			return
		}
		if (l < n)
			helper(l + 1, r, tmp + '(')
		if (l > r)
			helper(l, r + 1, tmp + ')')
	}

	helper(1, 0, '(')
	return ans
};
module.exports = generateParenthesis
