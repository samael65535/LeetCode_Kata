/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var traverse = function(root, deep) {
	let leftDepth = deep
	let rightDepth = deep
	if (root.left)
		leftDepth =  traverse(root.left, deep+1)
	if (root.right)
		rightDepth = traverse(root.right, deep+1)
	return Math.max(leftDepth, rightDepth)
};
var maxDepth = function(root) {
	if (root == null) return 0
	return traverse(root, 1)
};

module.exports = maxDepth

