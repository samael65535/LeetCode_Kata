/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var encodeStr = (s)  => {
	// 编码化
	let lenS = s.length
	let hash = {}
	let str1 = ''
	let index = 1
	for (let i = 0; i <lenS; i++) {
		let c = s[i]
		if (!hash[c]) {
			hash[c] = index
			index++
		} else {
			str1 += hash[c] + ','
		}
	}
	return str1
}
var isIsomorphic1 = function(s, t) {
	let lenS = s.length
	let lenT = t.length
	if (lenS != lenT) return false
	return encodeStr(s) == encodeStr(t)
};


var isIsomorphic = function (s, t) {
	let lenS = s.length
	let hashS = {}
	let hashT = {}
	let indexS = 1
	let indexT = 1
	for (let i = 0; i <lenS; i++) {
		let cS = s[i]
		let cT = t[i]
		if (!hashS[cS]) {
			hashS[cS] = indexS
			indexS++
		}
		if (!hashT[cT]) {
			hashT[cT] = indexT
			indexT++
		}
		if (hashT[cT]!=hashS[cS]) return false

	}
	return true
}
