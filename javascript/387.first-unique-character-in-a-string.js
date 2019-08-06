/**
 * @param {string} s
 * @return {number}
 */
//const _ = require('lodash')
var firstUniqChar = function (s) {
	let l = s.length
	if (l == 1) return 0
	let uniq = {}
	let dunp = {}
	for (let i = 0; i <l; i++) {
		if (dunp[s[i]] != undefined || uniq[s[i]] != undefined) {
			delete uniq[s[i]]
			dunp[s[i]] = true
		} else {
			uniq[s[i]] = i
		}
	}
	let ans = _.min(Object.values(uniq))
	return   ans != undefined ? ans : -1
};

// console.log(firstUniqChar('leetcode'))
// console.log(firstUniqChar('la'))
//
// console.log(firstUniqChar("aadadaad"))
//
// console.log(firstUniqChar('loveleetcode'))
