#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
	string simplifyPath(string path) {
	  vector<string> mystack;
	  string tmpStr;
	  for (auto c : path) {
		if (c == '/') {
			mystack.push_back(string(tmpStr));
			tmpStr = "";
		} else {
		  tmpStr += c;
		}
	  }
	  if (!tmpStr.empty())
		mystack.push_back(string(tmpStr));
	  vector<string> resVec;
	  for (auto s : mystack) {

		if (s == "." || s == "") {
		  continue;
		} else if (s == ".."){
		  if (!resVec.empty()) resVec.pop_back();
		} else {
		  resVec.push_back(s);
		}
	  }
	  string resStr;
	  for (auto s : resVec) {
		resStr += "/" + s;
	  }
	  return resStr.size() ? resStr : "/";
	}
};

int main() {
  auto s = new Solution();
  cout << s -> simplifyPath("/a/./b/../../c/") << endl;
  cout << s -> simplifyPath("/home/") << endl;
  cout << s -> simplifyPath("/home//foo/..") << endl;
	cout << s->simplifyPath("/...") << endl;;
  return 0;
}
