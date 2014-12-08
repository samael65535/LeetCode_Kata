// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// For example,
// Given s = "Hello World",
// return 5.

// #include <iostream>
// #include <vector>
// #include <string.h>
// using namespace std;
class Solution {
public:
	int lengthOfLastWord(const char *s) {
		auto count = 0;
		auto k = 0;
		for ( k = strlen(s) - 1; k >= 0; k--) {
		  if (s[k] != ' ') {
			break;
		  }
		}
		for (auto i = k; i >= 0; i--) {
		  if(s[i] == ' ') {
			break;
		  } else {
			count ++;
		  }
		}
		return count;
	}
};

// int main() {
//	Solution s;
//	cout << s.lengthOfLastWord("hello World") << endl;
//	cout << s.lengthOfLastWord("") << endl;
//	cout << s.lengthOfLastWord("a b c ") << endl;
//	cout << s.lengthOfLastWord("a   ") << endl;
//	cout << s.lengthOfLastWord(" a b cddd dfdf") << endl;
//	return 0;
// }
