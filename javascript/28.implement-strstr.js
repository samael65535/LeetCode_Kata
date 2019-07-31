/**
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function (haystack, needle) {
	// 不用内置函数
	let nl = needle.length
	let kl = haystack.length
	if (needle.length == 0) return 0
	if (nl > kl) return -1
	let ans = -1
	let flag = true
	for (let i = 0; i < kl; i++) {
		ans = i
		flag = true
		let s = i
		for (let j = 0; j < nl; j++) {
			if (haystack[s] == needle[j]) {

			} else {
				flag = false
				break;
			}
			s++
		}
		if (flag) {
			break;
		}
		ans = -1
	}
	return ans
};

var strStr = function (haystack, needle) {
	let nl = needle.length
	let kl = haystack.length
	if (nl == 0) return 0
	if (nl > kl) return -1
	for (let i = 0; i < kl-nl+1; i++) {
		let str = haystack.slice(i, i+needle.length)
		if(str == needle) {
			return i
		}
	}
	return -1
};
console.log(strStr('a', 'a')) //  0
console.log('------')
// console.log(strStr('hello', 'e')) //  1
// console.log('------')
// console.log(strStr('hello', 'lll')) // -1
// console.log('------')
// console.log(strStr('hello', ''))  // 0
// console.log('------')
// console.log(strStr('', ''))        // 0
// console.log('------')
// console.log(strStr('123', '1234')) // -1
// console.log('------')
// console.log(strStr('aaaa', 'bba')) // -1
// console.log('------')
// console.log(strStr('aaaa', 'aaaa')) // -1
// console.log('------')
// console.log(strStr("mississippi", "issip")) // -1
// console.log('------')
