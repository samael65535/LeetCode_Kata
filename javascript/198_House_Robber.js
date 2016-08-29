/**
 * Created by samael on 16/8/29.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length <= 2) return Math.max(nums[0] || 0, nums[1] || 0);
    var dp = [nums[0], Math.max(nums[0], nums[1])];
    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
    }
    return dp.pop();
};
console.log(rob([]));
