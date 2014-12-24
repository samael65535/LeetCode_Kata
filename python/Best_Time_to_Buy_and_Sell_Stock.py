# Say you have an array for which the ith element is the price of a given stock on day i.

# If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

class Solution:
    # @param prices, a list of integer
    # @return an integer
    def maxProfit(self, prices):
        if (not prices):
            return 0
        buy = prices[0]
        profit = 0
        for i in range(len(prices)):
            profit = max(prices[i]-buy, profit)
            buy = min(prices[i], buy)
        return profit

# if __name__ == "__main__":
#     s = Solution();
#     a = range(100000)[::-1]
#     b = range(100000)
#     # print a+b
#     print s.maxProfit(a)


