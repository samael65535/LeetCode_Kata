// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

// Note:
// Could you optimize your algorithm to use only O(k) extra space?
#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
   vector<int> getRow(int rowIndex) {
	 vector<int> result;
	 result.resize(rowIndex+2);
	 for(int i =0; i< rowIndex+2; i++)
	   result[i] = 0;
	 result[1]=1;
	 for(int i =0; i< rowIndex; i++)
	  {
		for(int j =rowIndex+1; j>0; j--)
		{
		  result[j] = result[j-1] + result[j];
		}
	  }
	  result.erase(result.begin());
	  return result;
	}
};

int main() {
  Solution s;
  vector<int> a(s.getRow(5));
  for (auto i = a.begin(); i != a.end(); i++) {
	cout << *i << endl;
  }
  return 0;
}
