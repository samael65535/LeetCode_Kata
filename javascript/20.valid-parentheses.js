/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
	let len = s.length
	for (let i = 0; i < len; i++) {
		let c = s[i]
		if(c == '}' ) {
			let c = stack.pop()
			if(c != '{') return false
		} else if(c == ')' ) {
			let c = stack.pop()
			if(c != '(') return false
		} else if(c == ']' ) {
			let c = stack.pop()
			if(c != '[') return false
		} else {
			stack.push(c)
		}
	}
	return stack.length  == 0
};
module.exports = isValid
