/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	let list = []
	if (root == null) {
		return JSON.stringify(list)
	}
	let queue = [root]
	while (queue.length > 0) {
		let node = queue.shift()
		if (node == null) {
			list.push(null)
		} else {
			list.push(node.val)
			queue.push(node.left)
			queue.push(node.right)
		}
	}
	while (list[list.length - 1] == null) list.pop()
	return JSON.stringify(list)
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	let list = JSON.parse(data)
	if (list.length == 0) return null
	let root = new TreeNode(list[0])
	let nodes = list.slice(1)
	let children = [root]
	while(children.length > 0) {
		let cur = children.shift()
		if(!cur) continue
		if(nodes.length > 0) {
			let lVal = nodes.shift()
			if(lVal != null) {
				cur.left = new TreeNode(lVal)
				children.push(cur.left)
			}
		}

		if(nodes.length > 0) {
			let rVal = nodes.shift()
			if(rVal != null) {
				cur.right = new TreeNode(rVal)
				children.push(cur.right)
			}
		}
	}
	return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
let leetcode = require('leetcode')

let testTree = leetcode.Tree.create([1, 2, 3, null, null, 4])
// console.log(serialize(deserialize(serialize(testTree))))
//
// testTree = leetcode.Tree.create([])
// console.log(serialize(deserialize(serialize(testTree))))

testTree = leetcode.Tree.create([1, null, 2, null, 3])
console.log(serialize(testTree))
console.log(serialize(deserialize(serialize(testTree))))
