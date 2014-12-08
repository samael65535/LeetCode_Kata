/**
 *Given a binary tree, find its maximum depth. 
 *The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
// #include <iostream>
// using namespace std;
// struct TreeNode {
//      int val;
//      TreeNode *left;
//      TreeNode *right;
//      TreeNode(int x) : val(x), left(NULL), right(NULL) {}
// };
class Solution {
public:
    int maxDepth(TreeNode *root) {
      int R = 0;
      int L = 0;
      if (root == NULL) return 0;
      if (root -> left != NULL) {
        L = this -> maxDepth(root -> left);
      }
      if (root -> right != NULL) {
        R = this -> maxDepth(root -> right);
      }
      int t =  R > L ? R : L;
      return t + 1;
    }
};


// int main () {
//   Solution *s = new Solution();
//   TreeNode *parent = new TreeNode(3);
//   TreeNode *root = parent;
//   TreeNode * t = root -> left = new TreeNode(3);
//   root -> right = new TreeNode(3);
//   t -> left = new TreeNode(3);
//   cout << s -> maxDepth(root) << endl;
//   return 0;
// }
