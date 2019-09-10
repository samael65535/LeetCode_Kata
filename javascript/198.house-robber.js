/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	let len = nums.length
	let dp = new Array(len + 1)
	if (nums.length == 0) return 0
	dp[1] = nums[0]
	dp[0] = 0
	for(let i = 2; i<= len; i++) {
		dp[i] = Math.max(dp[i-2] + nums[i-1], dp[i-1])
	}
	return dp[len]
};

module.exports = rob
