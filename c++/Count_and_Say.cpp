 // The count-and-say sequence is the sequence of integers beginning as follows:
 // 1, 11, 21, 1211, 111221, ...
 // 1 is read off as "one 1" or 11.
 // 11 is read off as "two 1s" or 21.
 // 21 is read off as "one 2, then one 1" or 1211.
 // Given an integer n, generate the nth sequence.

 // Note: The sequence of integers will be represented as a string.

#include <iostream>
using namespace std;
Class Solution {
public:
    string countAndSay(int n) {
      if (n == 0) return "";
      string beginStr("1");
      for (int i = 1; i < n; i++) {
        string tmpStr;
        int count = 1;
        for (int j = 0; j < beginStr.size() - 1; j++) {
          if (beginStr.at(j) != beginStr.at(j+1)) {
            tmpStr += std::to_string(count) + beginStr.at(j);
            count = 1;
          } else {
            count++;
          }
        }
        tmpStr += std::to_string(count) + beginStr.at(beginStr.size() - 1);
        beginStr = tmpStr;
      }
      return beginStr;
    }
};

int main(){
    Solution s;
    cout << s.countAndSay(3) << endl;
    return 0;
}
