/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	var carry = 0;
	var lastIdx = digits.length - 1;
	var val = digits[lastIdx] + 1;
	if (val >= 10) {
		carry = parseInt(val/10);
		digits[lastIdx] = val % 10
		for (var i = lastIdx - 1; i >= 0; i--) {
			var n = digits[i];
			digits[i] = (n + carry) % 10
			carry = parseInt((n + carry) / 10);
			if (carry == 0) break;
		}
		if (carry != 0) digits.unshift(carry)
	} else {
		digits[lastIdx] = val;
	}
	return digits;
};
plusOne([9]);
plusOne([8,9,0,9]);
plusOne([9,9,9,9]);
//plusOne([8,9,9,9]);
//plusOne([8,9,9,9]);