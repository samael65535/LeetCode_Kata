/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	let len = nums.length
	let sum1 = nums.reduce((acc, cur) => {
		return acc + cur
	}, 0)
	let sum2 = (len+0) * (len+1) / 2
	return sum2 - sum1
};

module.exports = missingNumber
