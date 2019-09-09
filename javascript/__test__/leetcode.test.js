let leetcode = require('leetcode')

test('53 test', () => {
	let maxSubArray = require('../53.maximum-subarray')
	expect(
		maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
	).toBe(6)

	expect(
		maxSubArray([1,2,3,4])
	).toBe(10)

	expect(
		maxSubArray([-4,-3,-2,-1])
	).toBe(-1)

	expect(
		maxSubArray([-1,-3,-2,-1])
	).toBe(-1)

	expect(
		maxSubArray([-1,3,-2,-1])
	).toBe(3)


})

test('70 test', () => {
	let climbStairs = require('../70.climbing-stairs')
	expect(climbStairs(1)).toBe(1)
	expect(climbStairs(2)).toBe(2)
	expect(climbStairs(4)).toBe(5)
})


test('88 test', () => {
	let merge = require('../88.merge-sorted-array')
	let nums1 = [1, 2, 3, 0, 0, 0]
	// merge(nums1, 3, [2,5,6], 3)
	// expect(
	// 	nums1
	// ).toStrictEqual([1,2,2,3,5,6])
	nums1 = [-10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -5, -5, -5, -4, -4, -4, -3, -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	let m = 55
	let nums2 = [-10, -10, -9, -9, -9, -9, -8, -8, -8, -8, -8, -7, -7, -7, -7, -7, -7, -7, -7, -6, -6, -6, -6, -5, -5, -5, -5, -5, -4, -4, -4, -4, -4, -3, -3, -3, -2, -2, -2, -2, -2, -2, -2, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9]
	let n = 99
	merge(nums1, m, nums2, n)
})

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
		zigzagLevelOrder(tree([3, 9, 20, null, null, 15, 7]))
	).toStrictEqual(
		[
			[3],
			[20, 9],
			[15, 7]
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
		sortedArrayToBST([-10, -3, 0, 5, 9])
	).toStrictEqual([0, -3, 9, -10, null, 5])
})

test('121 test', () => {
	let maxProfit = require('../121.best-time-to-buy-and-sell-stock')
	expect(
		maxProfit([7, 6, 4, 3, 1])
	).toBe(0)

	expect(
		maxProfit([7, 1, 5, 3, 6, 4])
	).toBe(5)
	expect(
		maxProfit([7])
	).toBe(0)

	expect(
		maxProfit([1,2,3,4,5])
	).toBe(4)
})
test('278 test', () => {
	let solution = require('../278.first-bad-version')
	let isBadVersion = (n) => {
		return n >= 3
	}
	expect(
		solution(isBadVersion)(10)
	).toBe(3)

	isBadVersion = (n) => {
		return n >= 1
	}
	expect(
		solution(isBadVersion)(10)
	).toBe(1)


	isBadVersion = (n) => {
		return n >= 10
	}
	expect(
		solution(isBadVersion)(10)
	).toBe(10)


	isBadVersion = (n) => {
		return n >= 4
	}
	expect(
		solution(isBadVersion)(5)
	).toBe(4)
})


