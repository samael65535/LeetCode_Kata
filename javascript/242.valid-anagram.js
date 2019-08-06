/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	return s.split('').sort((a, b) => b.charCodeAt() - a.charCodeAt()).join() == t.split('').sort((a, b) => b.charCodeAt() - a.charCodeAt()).join()
};


var isAnagram = function (s, t) {
	let hashA = {}
	let l1 = s.length
	let l2 = t.length
	if (l1 != l2) return false
	for (let i = 0; i < l1; i++) {
		let c = s[i]
		if (hashA[c])
			hashA[c] += 1
		else
			hashA[c] = 1
	}

	for (let i = 0; i < l2; i++) {
		let c = t[i]
		if (hashA[c])
			hashA[c] -= 1
		else
			return false
	}
	let flag = true
	for (let k  in hashA) {
		flag = flag && hashA[k] == 0
		if (flag == false) return false
	}
	return true
};

//console.log(isAnagram('abcdefg', 'cddeafg'))
console.log(isAnagram('rat', 'cat'))
