// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Solution2:
// 设置一个sum,加加减减出最后一个数
#include <map>
#include <iostream>
using namespace std;
class Solution {
public:
    int singleNumber(int A[], int n) {
      map<int, bool> numMap;
      for (int i = 0; i < n; i++) {
        int num = A[i];
        if (numMap.find(num) != numMap.end()) {
          numMap[num] = !numMap[num];
        } else {
          numMap[num] = true;
        }
      }
      int correctNum;
      map<int, bool>::iterator m1_Iter;
      for(m1_Iter = numMap.begin(); m1_Iter != numMap.end(); m1_Iter++) {
        if (m1_Iter -> second == true) {
          correctNum = m1_Iter -> first;
        }
      }
      return correctNum;
    }
};

int main() {
  int test_case1[5] = {1,1,2,2,3};
  int test_case2[7] = {1,1,2,2,3,3,4};
  auto test = new Solution();
  cout << test -> singleNumber(test_case1, 5) << endl;
  cout << test -> singleNumber(test_case2, 7) << endl;
  return 0;
}
