let leetcode = require('leetcode')

test('2 test', () => {
	let addTwoNumbers = require('../2.add-two-numbers')
	var l1 = leetcode.List.create([2, 4, 3])
	var l2 = leetcode.List.create([5, 6, 4])
	expect(
		leetcode.List.toArray(addTwoNumbers(l1, l2))
	).toStrictEqual([7, 0, 8])


	var l1 = leetcode.List.create([2, 4, 3])
	var l2 = leetcode.List.create([5, 6])
	expect(
		leetcode.List.toArray(addTwoNumbers(l1, l2))
	).toStrictEqual([7, 0, 4])


	var l1 = leetcode.List.create([2, 4])
	var l2 = leetcode.List.create([5, 6])
	expect(
		leetcode.List.toArray(addTwoNumbers(l1, l2))
	).toStrictEqual([7, 0, 1])

	var l1 = leetcode.List.create([2])
	var l2 = leetcode.List.create([5, 6, 2, 3, 1])
	expect(
		leetcode.List.toArray(addTwoNumbers(l1, l2))
	).toStrictEqual([7, 6, 2, 3, 1])
})


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

test('5 test', () => {
	let longestPalindrome = require('../5.longest-palindromic-substring')
	expect(longestPalindrome('a')).toBe('a')
	expect(longestPalindrome('aaa')).toBe('aaa')
	expect(longestPalindrome('aac')).toBe('aa')
	expect(longestPalindrome('acca')).toBe('acca')
	expect(longestPalindrome('aa')).toBe('aa')
	expect(longestPalindrome('babad')).toBe('bab')
	expect(longestPalindrome('cbbd')).toBe('bb')
	expect(longestPalindrome('abacab')).toBe("bacab")
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
		threeSum([-1, 0, 1, 2, -1, -4])
	).toStrictEqual([[-1, -1, 2].sort(), [-1, 0, 1].sort()])
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

test('49 test', () => {
	let groupAnagrams = require('../49.group-anagrams')
	expect(
		groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
	).toStrictEqual([[
		["ate", "eat", "tea"].sort(),
		["nat", "tan"].sort(),
		["bat"].sort()
	]])
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

test('73 test', () => {
	let setZeroes = require('../73.set-matrix-zeroes')
	var matrix = [
		[0, 1, 2, 0],
		[3, 4, 5, 2],
		[1, 3, 1, 5]
	]
	//expect(
	setZeroes(matrix)
	//).toStrictEqual()
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

test('105 test', () => {
	let buildTree = require('../105.construct-binary-tree-from-preorder-and-inorder-traversal')
	let root = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
	console.log(root)

})


test('108 test', () => {
	let sortedArrayToBST = require('../108.convert-sorted-array-to-binary-search-tree')
	let tree = leetcode.Tree.create;
	expect(
		sortedArrayToBST([-10, -3, 0, 5, 9])
	).toStrictEqual([0, -3, 9, -10, null, 5])
})

test('116 test', () => {
	const connect = require('../116.populating-next-right-pointers-in-each-node.js')
	let root = leetcode.Tree.create([1, 2, 3, 4, 5, 6, 7])
	connect(root)

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

test('131 test', () => {
	let partition = require('../131.palindrome-partitioning.js')
	console.log(partition('aab'))
	console.log(partition('a'))
	console.log(partition('ab'))

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


test('200 test', () => {
	let numIslands = require('../200.number-of-islands.js')
	expect(
		numIslands([
			'11110'.split(''),
			'11010'.split(''),
			'11000'.split(''),
			'00000'.split(''),
		])
	).toBe(1)

	expect(
		numIslands([
			'11000'.split(''),
			'11000'.split(''),
			'00100'.split(''),
			'00011'.split(''),
		])
	).toBe(3)

	expect(
		numIslands([
			'11000'.split(''),
		])
	).toBe(1)

	expect(
		numIslands([
			'1001'.split(''),
		])
	).toBe(2)
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

test('240 test', () => {
	let searchMatrix = require('../240.search-a-2d-matrix-ii')
	expect(searchMatrix([
			[1, 2, 4, 5, 8],
			[2, 3, 5, 7, 9]
		], 2
	)).toBeTruthy()

	expect(searchMatrix([
			[1, 2, 4, 5],
			[3, 4, 5, 6]
		], 2
	)).toBeTruthy()

	expect(searchMatrix([
			[1, 2, 3, 5],
			[3, 4, 10, 12],
			[5, 6, 11, 13]
		], 4
	)).toBeTruthy()
	expect(searchMatrix([
		[1, 4, 7, 11, 15],
		[2, 5, 8, 12, 19],
		[3, 6, 9, 16, 22],
		[10, 13, 14, 17, 24],
		[18, 21, 23, 26, 30]
	], 5)).toBeTruthy()

	expect(searchMatrix([
		[5]
	], 5)).toBeTruthy()
	expect(searchMatrix([
			[1, 4, 7, 11, 15],
			[2, 5, 8, 12, 19],
			[3, 6, 9, 16, 22],
			[10, 13, 14, 17, 24],
			[18, 21, 23, 26, 30]
		], 20)).toBeFalsy()
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

test('328 test', () => {
	let oddEvenList = require('../328.odd-even-linked-list')
	var list = leetcode.List.create([1, 2, 3, 4, 5, 6])
	expect(
		leetcode.List.toArray(oddEvenList(list))
	).toStrictEqual([1, 3, 5, 2, 4, 6])

	var list = leetcode.List.create([1, 2, 3, 4, 5])
	expect(
		leetcode.List.toArray(oddEvenList(list))
	).toStrictEqual([1, 3, 5, 2, 4])

	var list = leetcode.List.create([1])
	expect(
		leetcode.List.toArray(oddEvenList(list))
	).toStrictEqual([1])

	var list = leetcode.List.create([1, 2])
	expect(
		leetcode.List.toArray(oddEvenList(list))
	).toStrictEqual([1, 2])


	var list = leetcode.List.create([])
	expect(
		leetcode.List.toArray(oddEvenList(list))
	).toStrictEqual([])
})
test('334 test', () => {
	let increasingTriplet = require('../334.increasing-triplet-subsequence')
	expect(increasingTriplet([2, 4, -2, -3])).toBeFalsy()
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

test('440 test', () => {
	const findKthNumber = require('../440.k-th-smallest-in-lexicographical-order')
	expect(
		findKthNumber(100, 100)
	).toBe(99)
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


test('994 test', () => {
	const orangesRotting = require('../994.rotting-oranges.js')
	expect(
		orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])
	).toBe(4)

	expect(
		orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])
	).toBe(-1)


	expect(
		orangesRotting([[0, 2]])
	).toBe(0)

	expect(
		orangesRotting([[0, 1]])
	).toBe(-1)

	expect(
		orangesRotting([[2], [1], [1], [1], [2], [1], [1]])
	).toBe(2)
})
