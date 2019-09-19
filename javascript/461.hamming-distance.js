/**
 * @param {number} x
 * @param {number} y
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
var hammingDistance = function(x, y) {
	let ans = parseInt(x ^ y).toString(2)
	let l = ans.length
	let count = 0
	for(let i = 0; i < l; i++) {
		if(ans[i] == 1) count++
	}
	return count

};
module.exports = hammingDistance
