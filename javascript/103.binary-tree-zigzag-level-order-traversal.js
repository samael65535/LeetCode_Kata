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
var zigzagLevelOrder = function (root) {
	if (root == null) return []
	// 层次遍历然后翻转
	let list = [[root]]
	let row = 0
	while(1) {
		let curRow = list[row]
		if (curRow) {
			curRow.forEach((node, idx) => {
				if (node.left) {
					if (!list[row+1]) {
						list.push([])
					}
					list[row+1].push(node.left)
				}
				if (node.right) {
					if (!list[row+1]) {
						list.push([])
					}
					list[row+1].push(node.right)
				}
			})
			row++
		} else {
			break
		}
	}
	return list.map((l, i) => {
		if(i % 2)
			return l.map((a) => a.val).reverse()
		return l.map((a) => a.val)
	})
};
module.exports = zigzagLevelOrder
