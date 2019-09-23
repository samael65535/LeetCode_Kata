var isPalindrome = function (s) {
	return s.split('').reverse().join('') == s
}
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome1 = function (s) {
	// 超时
	let len = s.length
	let maxLength = 1
	if (len == 0) return ''
	let ans = s[0]
	for (let start = 0; start < len; start++) {
		for (let end = len; end > 0; end--) {
			let str = s.slice(start, end)
			if (isPalindrome(str)) {
				let strLen = str.length
				if (maxLength < strLen) {
					ans = str
					maxLength = strLen
				}
			}
		}
	}
	return ans
};
var longestPalindrome2 = function (s) {
	// 取反s.reverse(), 再取最长公共子序列
}
var longestPalindrome = function (s) {
	// 中心扩散
	let len = s.length
	let maxLength = 1
	if (len == 0) return ''
	let ans = s[0]
	for (let mid = 0; mid < len; mid++) {
		// 奇数
		let len1 = 0
		let start = 0
		let end = 1
		for (let i = 0; i <= mid; i++) {
			if (s[mid + i] == s[mid - i]) {
				start = mid - i
				end = mid + i
			} else {
				break;
			}
		}
		len1 = end - start + 1
		if (maxLength < len1) {
			ans = s.slice(start, end + 1)
			maxLength = len1
		}
		// 偶数
		let len2 = 0
		for (let i = 0; i <= mid; i++) {
			if (s[mid - i] == s[mid + i + 1]) {
				start = mid - i
				end = mid + i + 1
			} else {
				break;
			}
		}
		len2 = end - start + 1
		if (maxLength < len2) {
			ans = s.slice(start, end + 1)
			maxLength = len2
		}

	}
	return ans
};
module.exports = longestPalindrome
