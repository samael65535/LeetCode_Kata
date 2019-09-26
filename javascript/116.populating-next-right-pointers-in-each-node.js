/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if (root == null) return null
	let queue = [root]
	let list = []
	while (queue.length > 0) {
		let curNode = queue.shift()
		list.push(curNode)
		if (curNode.left)
			queue.push(curNode.left)
		if (curNode.right)
			queue.push(curNode.right)
	}
	let len = list.length
	let depth = 1
	for (let i = 0; i < len; i++) {
		if (i == Math.pow(2, depth) - 2) {
			list[i].next = null
			depth++
		} else {
			list[i].next = list[i + 1]

		}
	}
	return root
};

module.exports = connect
