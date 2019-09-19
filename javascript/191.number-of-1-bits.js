/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	//let bit = parseInt(n).toString(2)
	let count = 0
	while (n != 0) {
		if (n % 2 == 1) {
			count++
		}
		n = parseInt(n / 2)
	}

	return count
};
module.exports = hammingWeight
