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

var lengthOfLongestSubstring3 = function (s) {
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

// -- 以下是第二遍 递归
var lengthOfLongestSubstring = function (s) {
	let len = s.length
	if (len == 0) return 0
	if (len == 1) return 1
	let maxLength = 1
	let dict = {}
	let start = 0
	for (let end = 0; end < len; end++) {
		let c = s[end]
		if (dict[c]) {
			start = Math.max(dict[c], start)
		}
		maxLength = Math.max(maxLength, end - start + 1)
		dict[c] = end + 1
	}
	return maxLength
};

/*
* 作者：fa-kuang-de-jie-zi
* 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-zui-chang-zi-chuan-by-fa-kuang-d/
* 来源：力扣（LeetCode）
* 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

var lengthOfLongestSubstring = function (s) {
	var i = 0, res = 0, n = 0;
	for (var j = 0; j < s.length; j++) {
		n = s.slice(i, j).indexOf(s[j])
		if (n == -1) {
			res = Math.max(res, j + 1 - i);
		} else {
			i += n + 1;
		}
	}
	return res;
};


module.exports = lengthOfLongestSubstring
