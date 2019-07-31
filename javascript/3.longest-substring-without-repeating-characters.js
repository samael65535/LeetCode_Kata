/**
 * @param {string} s
 * @return {number}
 */

/**
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */
var lengthOfLongestSubstring2 = function (s) {
	// stack 模拟
	let stack = []
	if (s.length == 0) return 0
	if (s.length == 1) return 1
	let maxLength = 1
	let dict = {} // 当前是否有重复
	for (let i = 0, l = s.length; i < l; i++) {
		let c = s[i]
		if (dict[c]) {
			while (stack[0] != c) {
				let c = stack.shift()
				delete dict[c]
				//console.log(c, stack.toString(), maxLength, stack.length)
			}
			stack.shift()
		}
		dict[c] = true
		stack.push(c)

		maxLength = Math.max(stack.length, maxLength)

	}

	return maxLength

};

var lengthOfLongestSubstring = function (s) {
	// 迭代
	// 因为只求长度, 可以不用保存子串的内容
	// 滑动窗口
	let l = s.length
	if (l == 0) return 0
	if (l == 1) return 1
	let maxLength = 1
	let start = 0
	let end = 0
	let dict = new Map()
	while (end < l) {
		let c = s[end]
		if (dict[c]) {
			start = Math.max(dict[c], start)
		}
		maxLength = Math.max(maxLength, end - start + 1)
		dict[c] = end + 1
		end++
	}
	return maxLength

};

console.log(lengthOfLongestSubstring('dvdf'));
console.log('------')
console.log(lengthOfLongestSubstring('bbbbb'));
console.log('------')
console.log(lengthOfLongestSubstring(''));
console.log('------')
console.log(lengthOfLongestSubstring('ab'));
console.log('------')
console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log('------')
console.log(lengthOfLongestSubstring("aabaab!bb"));

