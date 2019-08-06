/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function (s) {
	let filter = s.toLowerCase().split('').filter((char) => {
		let c = char.charCodeAt()
		return (c >= 'a'.charCodeAt() && c <= 'z'.charCodeAt()) || (c >= '0'.charCodeAt() && c <= '9'.charCodeAt())
	})
	let l = filter.length
	for (let i = 0; i < l / 2; i++) {
		if (filter[i] != filter[l - i - 1]) return false
	}
	return true

};

var isPalindrome3 = function (s) {
	let filter = s.split('').filter((char) => {
		let c = char.charCodeAt()
		return isNumber(c) || isAlphabet(c)
	})
	let l = filter.length
	for (let i = 0; i < l / 2; i++) {
		let c1 = filter[i].charCodeAt()
		let c2 = filter[l - i - 1].charCodeAt()
		let d = Math.abs(c1 - c2)
		if (isAlphabet(c1) != isAlphabet(c2) || (d != 0 && d != 32)) return false

	}
	return true

};
var isAlphabet = (c) => {
	return (c >= 97 && c <= 122) || (c >= 65 && c <= 90)
}

var isNumber = (c) => {
	return c >= 48 && c <= 57
}
var isPalindrome = function (s) {
	let list = s.split('');
	let i = 0
	let j = list.length - 1;
	while (i < j) {
		let c1 = list[i].charCodeAt()
		let c2 = list[j].charCodeAt()

		while (i < j && isNumber(c1) == false && isAlphabet(c1) == false) {
			i++
			c1 = list[i].charCodeAt()
		}
		while (i < j && isNumber(c2) == false && isAlphabet(c2) == false) {
			j--
			c2 = list[j].charCodeAt()
		}
		let d = Math.abs(c1 - c2)
		if (isAlphabet(c1) != isAlphabet(c2) || (d != 0 && d != 32)) {
			return false
		}
		i++
		j--
	}

	return true
};
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('0P'))

console.log(isPalindrome('abcabac'))
console.log(isPalindrome(',.'))
