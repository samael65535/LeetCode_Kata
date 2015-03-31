#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
	vector<vector<int> > generate(int numRows) {
	  vector<vector<int> > triangle(numRows, vector<int> (1, 1));
	  for (int i = 1; i < numRows; i++) {
		for (int j = 0; j < i; j++) {

		  int a = triangle[i-1][j-1];
		  int b = triangle[i-1][j];

		  triangle[i].push_back(a + b);
		  cout << a + b << '\t';
		}
		cout << endl;
	  }
	  return triangle;
	};
};


int main() {
  Solution *s = new Solution();
  auto res = s -> generate(5);
  for (auto a = res.begin(); a != res.end(); a++) {
	for (auto b = a -> begin(); b != a -> end(); b++) {
	  cout << *b << '\t';
	}
	cout << endl;
  }
  return 0;
}
