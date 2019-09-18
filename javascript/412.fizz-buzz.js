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
		if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
			res.push('FizzBuzz')
		} else if ((i + 1) % 3 == 0) {
			res.push('Fizz')
		} else if ((i + 1) % 5 == 0) {
			res.push('Buzz')
		} else {
			res.push(String(i + 1))
		}
	}
	return res.slice(0, n)
};

module.exports = fizzBuzz
