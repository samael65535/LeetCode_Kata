/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * @param {number[]} prices
 *
 * @return {number}
 */
var maxProfit = function (prices) {
	return prices.reduce((accumulator, current, index, array) => {
		return accumulator + Math.max(current-array[index-1], 0) || 0
	}, 0)

}

//maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([1, 5, 3, 6, 4])

console.log(maxProfit([5,4,3,2,1]))
// [0, 0, 4, 2, 5, 3]
// [0, 0, 4, 2, 6, 3]


