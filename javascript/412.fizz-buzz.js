/**
 * @param {number} n
 * @return {string[]}
 */
var res = []
var fizzBuzz = function (n) {
	if (res[n]) {
		return res.slice(0, n)
	}
	for (let i = res.length; i < n; i++) {
		let num = i + 1
		if (num % 3 == 0 && num % 5 == 0) {
			res.push('FizzBuzz')
		} else if (num % 3 == 0) {
			res.push('Fizz')
		} else if (num % 5 == 0) {
			res.push('Buzz')
		} else {
			res.push(String(num))
		}
	}
	return res.slice(0, n)
};

module.exports = fizzBuzz
