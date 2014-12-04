// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
// struct TreeNode {
//      int val;
//      TreeNode *left;
//      TreeNode *right;
//      TreeNode(int x) : val(x), left(NULL), right(NULL) {}
// };

#include <iostream>
using namespace std;
class Solution {
public:
    bool isSameTree(TreeNode *p, TreeNode *q) {
      bool flag = true;
      if (p == NULL || q == NULL) {
        return (p == NULL) && (q == NULL);
      }
      if (p -> val == q -> val) {
        flag = flag && this -> isSameTree(p -> left, q -> left);
        flag = flag && this -> isSameTree(p -> right, q -> right);
      } else {
        flag = false;
      }
      return flag;
    }
};
