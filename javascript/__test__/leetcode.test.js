let leetcode = require('leetcode')
test('98 test', () => {
	let isValidBST = require('../98.validate-binary-search-tree')
	let tree = leetcode.Tree.create;
	expect(isValidBST(tree([]))).toBeTruthy()
	expect(isValidBST(tree([2, 1, 3]))).toBeTruthy()
	expect(isValidBST(tree([1, 2, 3]))).toBeFalsy()
	expect(isValidBST(tree([1, 3]))).toBeFalsy()
	expect(isValidBST(tree([5, 1, 4, null, null, 3, 6]))).toBeFalsy()
	expect(isValidBST(tree([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13, null]))).toBeTruthy()
	expect(isValidBST(tree([10, 5, 15, null, null, 6, 20]))).toBeFalsy()
})

test('101 test', () => {
	let isSymmetric = require('../101.symmetric-tree')
	let treeCreate = leetcode.Tree.create
	expect(
		isSymmetric(treeCreate([]))
	).toBe(true)

	expect(
		isSymmetric(treeCreate([1, 2, 2]))
	).toBe(true)

	expect(
		isSymmetric(treeCreate([1, 2, 1]))
	).toBe(false)

	expect(
		isSymmetric(treeCreate([1, 2, 2, 3, 4, 4, 3]))
	).toBe(true)

	expect(
		isSymmetric(treeCreate([1, 2, 2, 3, 4, 4]))
	).toBe(false)
})

test('102 test', () => {
	let levelOrder = require('../102.binary-tree-level-order-traversal')
	let treeCreate = leetcode.Tree.create
	expect(
		levelOrder(treeCreate([]))
	).toStrictEqual([])

	expect(
		levelOrder(treeCreate([1, 2, 3]))
	).toStrictEqual([
		[1],
		[2, 3]
	])

	expect(
		levelOrder(treeCreate([1, 2, 3, 4, null, 5]))
	).toStrictEqual([
		[1],
		[2, 3],
		[4, 5],

	])


	expect(
		levelOrder(treeCreate([3, 9, 20, null, null, 15, 7]))
	).toStrictEqual([
		[3],
		[9, 20],
		[15, 7]
	])

	expect(
		levelOrder(treeCreate([1, 2, 3, 4, null, null, 5]))
	).toStrictEqual([[1], [2, 3], [4, 5]])
})

test('103 test', () => {
	let zigzagLevelOrder = require('../103.binary-tree-zigzag-level-order-traversal')
	let tree = leetcode.Tree.create;
	expect(
		zigzagLevelOrder(tree( [3,9,20,null,null,15,7]))
	).toStrictEqual(
		[
			[3],
			[20,9],
			[15,7]
		]
	)
})

test('104 test', () => {
	let maxDepth = require('../104.maximum-depth-of-binary-tree')
	expect(
		maxDepth(leetcode.Tree.create([3, 9, 20, null, null, 15, 7]))
	).toBe(3)
})


test('108 test', () => {
	let sortedArrayToBST = require('../108.convert-sorted-array-to-binary-search-tree')
	let tree = leetcode.Tree.create;
	expect(
		sortedArrayToBST( [-10,-3,0,5,9])
	).toStrictEqual([0,-3,9,-10,null,5])
})
