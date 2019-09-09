/**
 * @param {number} n
 * @return {number}
 */
/**
 * f(n) = f(n-1) + f(n-2)
 * f(1) = 1
 * f(2) = 2
 */
let cached = [1, 1, 2]
var climbStairs = function (n) {
	if (cached[n]) return cached[n]
	for (let i = 3; i <= n; i++) {
		cached[i] = cached[i - 1] + cached[i - 2]
	}
	return cached[n]
};

module.exports = climbStairs
