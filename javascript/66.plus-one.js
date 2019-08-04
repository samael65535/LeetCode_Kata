/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne_ = function (digits) {
	let carry = 0
	let isLast = true
	let ans = digits.reverse().map((num) => {
		let cur = (num + carry) % 10
		if (isLast) {
			isLast = false
			cur = (1 + num + carry) % 10
			carry = parseInt((num + 1) / 10)
		} else {
			carry = parseInt((num + carry) / 10)
		}
		return cur
	})
	if (carry > 0) {
		ans.push(carry)
	}
	return ans.reverse()
};

var plusOne = function (digits) {
	let l = digits.length;
	let carry = 0
	for (let i = l - 1; i >= 0; i--) {
		let n = carry + digits[i]
		if (i == l - 1) {
			n += 1
		}
		carry = parseInt(n / 10)
		digits[i] = n % 10
	}
	if (carry > 0) {
		digits.unshift(carry)
	}
	return digits
}
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
plusOne([9])
plusOne([8, 9, 0, 9]);
plusOne([9, 9, 9, 9]);
