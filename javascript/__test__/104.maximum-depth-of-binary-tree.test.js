let leetcode = require('leetcode')

let maxDepth = require('../104.maximum-depth-of-binary-tree')
test('104 test', () => {
	expect(1).toBe(1)
	expect(
		maxDepth(leetcode.Tree.create([3,9,20,null,null,15,7]))
	).toBe(3)
})
