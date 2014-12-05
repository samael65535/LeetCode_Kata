 // Say you have an array for which the ith element is the price of a given stock on day i.

 // If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
	int maxProfit(vector<int> &prices) {
	  if (prices.size() == 0) return 0;
	  int buy = prices[0];
	  auto profit = 0;
	  for (auto i = prices.begin(); i != prices.end(); ++i) {
		profit = max(*i - buy, profit);
		buy = min(*i, buy);
	  }
	  return profit;
	}
};


// int main() {
//	auto s = new Solution();
//	vector<int> prices;
	// prices.push_back(1);
	// prices.push_back(2);
	// prices.push_back(5);
	// prices.push_back(1);
//	cout << s ->maxProfit(prices) << endl;
//	return 0;
// }
