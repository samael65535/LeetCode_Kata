/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */



var isValidBST = function (root) {
	var checkNode = function(root, minNum, maxNum) {
		if (root == null) return  true

		if (minNum != null &&  root.val <= minNum) return false
		if (maxNum != null &&  maxNum <= root.val) return false

		return checkNode(root.right, root.val, maxNum)
			&& checkNode(root.left, minNum, root.val)
	}

	return checkNode(root, null,  null)
};

module.exports = isValidBST
