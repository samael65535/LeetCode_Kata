/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree1 = function(n) {
	if(n == 0) return false
	let res = Math.log10(n) / Math.log10(3)
	return res == parseInt(res)

};

var isPowerOfThree = function(n) {
	if(n == 0) return false
	while(n % 3 == 0) {
		n = n / 3
	}
	return n == 1
};

module.exports = isPowerOfThree
