/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

	let genHash = (str) => {
		let list = []
		for (let i = 0; i < 26; i++) {
			list[i] = 0
		}
		for (let i = 0; i < str.length; i++) {
			let code = str[i].charCodeAt() - 'a'.charCodeAt()
			list[code] = list[code] ? list[code] + 1 : 1
		}
		return list
	}
	let checker = (list1, list2) => {
		for (let i = 0; i < 26; i++) {
			if (list1[i] == list2[i]) continue
			return false
		}
		return true
	}
	let list1 = genHash(s1)
	let list2 = genHash(s2.slice(0, s1.length))
	for (let i = 0; i <= s2.length - s1.length; i++) {
		// 优化
		if (checker(list2, list1)) {
			return true
		}
		if(i > 0) {
			let code1 = s2[i - 1].charCodeAt() - 'a'.charCodeAt()
			let code2 = s2[i + s1.length - 1].charCodeAt() - 'a'.charCodeAt()
			list2[code1]--
			list2[code2]++
		}
	}
	return checker(list2, list1)
};
//console.log(checkInclusion('abc', 'aeee'))
