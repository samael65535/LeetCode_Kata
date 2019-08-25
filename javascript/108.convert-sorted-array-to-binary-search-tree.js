/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let leetcode = require('leetcode')
let TreeNode = leetcode.Tree.node
var sortedArrayToBST = function (nums) {
	if (!nums.length) return null;
	const root = new TreeNode(null);

	if(nums.length > 1) root.left = sortedArrayToBST(nums.splice(0, nums.length / 2));
	root.val = nums[0];
	root.right = sortedArrayToBST(nums.splice(1));
	return root;

};
module.exports = sortedArrayToBST
