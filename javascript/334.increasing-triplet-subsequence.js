/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
	let len = nums.length
	if (len < 2) return false
	let i = Number.MAX_VALUE
	let j = Number.MAX_VALUE
	for(let n of nums) {
		if(n <= i) {
			i = n
		} else if(n <= j) {
			j = n
		} else {
			return true
		}
	}
	return false

};

module.exports = increasingTriplet
