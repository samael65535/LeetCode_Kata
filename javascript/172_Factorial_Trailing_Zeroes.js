/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
	var k = parseInt(n/5);
	if (k == 0) return 0;
	return k + trailingZeroes(k);
};	

console.log(trailingZeroes(5));