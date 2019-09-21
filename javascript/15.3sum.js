/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
	let len = nums.length
	let ans = []
	if (len < 3) return ans
	nums.sort((a,b) => a-b)
	for (let i = 0; i < len; i++) {
		let a = nums[i]
		if (a > 0) break;
		if (nums[i - 1] == a) continue // 去重
		let start = i + 1
		let end = len - 1
		while (start < end) {
			let b = nums[start];
			let c = nums[end];
			let sum = a + b + c
			if (sum < 0) {
				start++
			} else if (sum > 0) {
				end--
			} else {
				ans.push([a, b, c])
				while (start < end && nums[start] == nums[start + 1]) start++
				while (start < end && nums[end] == nums[end - 1]) end--
				start++
				end--
			}
		}
	}
	return ans
};

module.exports = threeSum
