// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

#include <iostream>
using namespace std;
class Solution {
public:
	string convert(string s, int nRows) {
	  string res;
	  if (s.size() <= nRows || nRows == 1) {
		return s;
	  }

	  for (int r = 0; r < nRows; r++) {
		for(int k = 0; k < s.size() / nRows + 1; k++) {
		  int a = (r + 2 * (nRows - 1) * k);
		  if (a < s.size()) {
			res += s[a];
		  } else {
			break;
		  }
		  int b = a + (nRows - (r+1)) * 2;
		  if (b < s.size() && r != 0 && r != nRows - 1) {
			res += s[b];
			  } else if (b >= s.size()) {
			break;
		  }
		}

	  }
	  return res;
	}
};
int main() {
  return 0;
}
