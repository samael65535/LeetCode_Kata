/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let buyPrice = prices[0]
	let profit = 0
	for (let i = 0, l = prices.length; i <l;i++) {
		let sellPrice = prices[i]
		if (sellPrice <= buyPrice) {
			buyPrice = prices[i]
		} else {
			profit = Math.max(profit, sellPrice - buyPrice)
		}
	}
	return profit

};
module.exports = maxProfit
