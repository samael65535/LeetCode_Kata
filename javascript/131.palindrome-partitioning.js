/**
 * @param {string} s
 * @return {string[][]}
 */
let isPalindrome = (s) => {
	return s.split('').reverse().join('') == s
}
var partition = function (str) {
	if (str.length == 0) return []
	let ans = []
	let helper = (s, tmp) => {
		if (s.length == 0) {
			ans.push(tmp)
		}
		for (let i = 1; i < s.length + 1; i++) {
			let prefix = s.slice(0, i)
			if (isPalindrome(prefix)) {
				helper(
					s.slice(i),
					tmp.concat(prefix)
				)
			}
		}
	}

	helper(str, [])
	return ans

};
module.exports = partition
