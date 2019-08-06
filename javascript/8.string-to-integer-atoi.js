/**
 * @param {string} str
 * @return {number}
 */

let max = Math.pow(2, 31) - 1
let min = -Math.pow(2, 31)
var myAtoi = function(str) {
	let num = parseInt(str)
	if (isNaN(num)) return 0
	num = Math.min(max, num)
	num = Math.max(min, num)
	return num
};
