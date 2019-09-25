/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal1 = function(root) {
	let ret = []
	if(root == null) return []
	let func = (root) => {
		if(root) {
			if (root.left) {
				func(root.left)
			}
			ret.push(root.val)
			if (root.right) {
				func(root.right)
			}

		}
	}
	func(root)
	return ret
};
var inorderTraversal = function(root) {
	if(root == null) return []
	let r = root
	let ret = []
	let stack = []
	while(stack.length > 0 || r){
		if(r) {
			stack.push(r)
			r = r.left
		} else {
			r = stack.pop()
			ret.push(r.val)
			r = r.right
		}
	}
	return ret
};
//
//
// var leetcode = require('leetcode');
// var root = leetcode.Tree.create([1,null,2,3]);
// console.log(inorderTraversal(root));
