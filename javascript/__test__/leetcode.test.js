let leetcode = require('leetcode')
test('3 test', () => {
	let lengthOfLongestSubstring = require('../3.longest-substring-without-repeating-characters')
	expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
	expect(lengthOfLongestSubstring('bbbb')).toBe(1)
	expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
	expect(lengthOfLongestSubstring('')).toBe(0)
	expect(lengthOfLongestSubstring('a')).toBe(1)
	expect(lengthOfLongestSubstring('aa')).toBe(1)
	expect(lengthOfLongestSubstring('aba')).toBe(2)
	expect(lengthOfLongestSubstring('aab')).toBe(2)
	expect(lengthOfLongestSubstring('dvdf')).toBe(3)
	expect(lengthOfLongestSubstring('dcvdf')).toBe(4)
	expect(lengthOfLongestSubstring("asjrgapa")).toBe(6)

})

test('13 test', () => {
	let romanToInt = require('../13.roman-to-integer')
	expect(romanToInt('III')).toBe(3)
	expect(romanToInt('IV')).toBe(4)
	expect(romanToInt('IX')).toBe(9)
	expect(romanToInt('XI')).toBe(11)
	expect(romanToInt('XIV')).toBe(14)
	expect(romanToInt('LVIII')).toBe(58)
	expect(romanToInt('MCMXCIV')).toBe(1994)
})

test('15 test', () => {
	let threeSum = require('../15.3sum')
	expect(
		threeSum([])
	).toStrictEqual([])
	expect(
		threeSum([1])
	).toStrictEqual([])



	expect(
		threeSum([0, 1, -1])
	).toStrictEqual([[0, 1, -1].sort()])

	expect(
		threeSum([0, 1, 1])
	).toStrictEqual([])

	expect(
		threeSum([-1,0,1,2,-1,-4])
	).toStrictEqual([[-1,-1,2].sort(),[-1,0,1].sort()])
})
test('20 test', () => {
	let isValid = require('../20.valid-parentheses')
	expect(isValid('')).toBeTruthy()
	expect(isValid('()')).toBeTruthy()
	expect(isValid('()[]{}')).toBeTruthy()
	expect(isValid('(]')).toBeFalsy()
	expect(isValid('([)]')).toBeFalsy()
	expect(isValid(']')).toBeFalsy()
	expect(isValid('[')).toBeFalsy()
	expect(isValid('{[]}')).toBeTruthy()
})
test('53 test', () => {
	let maxSubArray = require('../53.maximum-subarray')
	expect(
		maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
	).toBe(6)

	expect(
		maxSubArray([1, 2, 3, 4])
	).toBe(10)

	expect(
		maxSubArray([-4, -3, -2, -1])
	).toBe(-1)

	expect(
		maxSubArray([-1, -3, -2, -1])
	).toBe(-1)

	expect(
		maxSubArray([-1, 3, -2, -1])
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

test('118 test', () => {
	let generator = require('../118.pascals-triangle')


	expect(generator(6)).toStrictEqual([
		[1],
		[1, 1],
		[1, 2, 1],
		[1, 3, 3, 1],
		[1, 4, 6, 4, 1],
		[1, 5, 10, 10, 5, 1]
	])

	expect(generator(5)).toStrictEqual([
		[1],
		[1, 1],
		[1, 2, 1],
		[1, 3, 3, 1],
		[1, 4, 6, 4, 1]
	])
	expect(generator(1)).toStrictEqual([
		[1],
	])
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
		maxProfit([1, 2, 3, 4, 5])
	).toBe(4)
})

test('190 test', () => {
	let reverseBits = require('../190.reverse-bits.js')
	expect(
		reverseBits(0b00000010100101000001111010011100)
	).toBe(964176192)
	expect(
		reverseBits(0b11111111111111111111111111111101)
	).toBe(3221225471)
})
test('191 test', () => {
	let hammingWeight = require('../191.number-of-1-bits')
	expect(hammingWeight(0)).toBe(0)
	expect(hammingWeight(1)).toBe(1)
	expect(hammingWeight(2)).toBe(1)
	expect(hammingWeight(3)).toBe(2)
	expect(hammingWeight(4)).toBe(1)

})
test('198 test', () => {
	let rob = require('../198.house-robber')
	expect(
		rob([1, 2, 3, 1])
	).toBe(4)

	expect(
		rob([2, 7, 9, 3, 1])
	).toBe(12)
})

test('204 test', () => {
	let countPrimes = require('../204.count-primes')

	expect(
		countPrimes(0)
	).toBe(0)


	expect(
		countPrimes(10)
	).toBe(4)

	expect(
		countPrimes(11)
	).toBe(4)

	expect(
		countPrimes(12)
	).toBe(5)

	expect(
		countPrimes(2)
	).toBe(0)
})

test('268 test', () => {
	let missingNumber = require('../268.missing-number')
	expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
	expect(missingNumber([0, 1])).toBe(2)
	expect(missingNumber([2, 1])).toBe(0)
	expect(missingNumber([0, 2])).toBe(1)
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

test('325 test', () => {
	let isPowerOfThree = require('../326.power-of-three')
	expect(isPowerOfThree(27)).toBeTruthy()
	expect(isPowerOfThree(0)).toBeFalsy()
	expect(isPowerOfThree(9)).toBeTruthy()
	expect(isPowerOfThree(45)).toBeFalsy()
})

test('412 test', () => {
	var fizzBuzz = require('../412.fizz-buzz.js')
	expect(
		fizzBuzz(15)
	).toStrictEqual([
		"1",
		"2",
		"Fizz",
		"4",
		"Buzz",
		"Fizz",
		"7",
		"8",
		"Fizz",
		"Buzz",
		"11",
		"Fizz",
		"13",
		"14",
		"FizzBuzz"
	])

	expect(
		fizzBuzz(0)
	).toStrictEqual([])

	expect(
		fizzBuzz(16)
	).toStrictEqual([
		"1",
		"2",
		"Fizz",
		"4",
		"Buzz",
		"Fizz",
		"7",
		"8",
		"Fizz",
		"Buzz",
		"11",
		"Fizz",
		"13",
		"14",
		"FizzBuzz",
		"16"
	])

	expect(
		fizzBuzz(1)
	).toStrictEqual([
		"1",
	])
})


test('461 test', () => {
	const hammingDistance = require('../461.hamming-distance.js')
	expect(
		hammingDistance(1, 4)
	).toBe(2)

	expect(
		hammingDistance(4, 1)
	).toBe(2)

	expect(
		hammingDistance(1, 0)
	).toBe(1)

	expect(
		hammingDistance(0, 0)
	).toBe(0)
})
