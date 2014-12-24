// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
	bool isBalanced(TreeNode *root) {
	  if (root == NULL){
		return true;
	  }
	  int diff = this -> depth(root -> right) - this -> depth(root -> left);
	  if (diff > 1 || diff < -1){
		return false;
	  }
	  return this -> isBalanced(root -> left) && this -> isBalanced(root -> right);
	};
	int depth(TreeNode *root) {
	  if (root == NULL) {
		return 0;
	  }
	  int leftDepth = this->depth(root -> left);
	  int rightDepth = this->depth(root -> right);
	  if (leftDepth > rightDepth){
		return 1 + leftDepth;
	  }
	  return 1 + rightDepth;
	}
};
