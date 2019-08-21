/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */


var levelOrder = function (root) {
	if (root == null) return []
	let result = []
	let checkNode = function (node, level) {
		if (level == result.length)
			result.push([])
		result[level].push(node.val)
		if (node.left)
			checkNode(node.left, level + 1)
		if (node.right)
			checkNode(node.right, level + 1)
	}
	checkNode(root, 0)
	return result
};

module.exports = levelOrder
