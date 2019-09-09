/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let startNum = nums[0]
	let max = startNum;
	let sum = startNum
	for (let i = 1, l = nums.length; i < l; i++) {
		if (sum < 0) {
			startNum = nums[i]
			sum = startNum
		} else {
			sum += nums[i]
		}
		max = Math.max(max,  sum)
	}
	return max
};
module.exports = maxSubArray
