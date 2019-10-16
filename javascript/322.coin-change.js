/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	let dp = []
	dp[0] = 0
	for (let i = 1; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if(dp[i] == undefined)
				dp[i] = amount + 1
			if (coins[j] <= i) {
				dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
			}
		}
	}
	return dp[amount] > amount ? -1 : dp[amount];
};
coinChange([1,2,5], 11)
module.exports = coinChange