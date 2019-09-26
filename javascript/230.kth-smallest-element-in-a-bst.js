/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
	let queue = [root]
	let list = []
	while(queue.length > 0) {
		let curNode = queue.shift()
		list.push(curNode.val)
		if(curNode.left) queue.push(curNode.left)
		if(curNode.right) queue.push(curNode.right)
	}
	list.sort((a,b) => a-b)
	return list[k-1]
};
module.exports = kthSmallest
