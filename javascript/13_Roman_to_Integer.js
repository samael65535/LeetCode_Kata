/**
 * Created by samael on 4/25/16.
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	var romanCharToNum = {
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000
	};
	var retNum = 0;

	for (var i = s.length - 1; i >= 0; i--) {
		var c = romanCharToNum[s[i]];
		var p = romanCharToNum[s[i + 1]];
		if (c < p) {
			retNum -= c;
		} else {
			retNum += c;
		}
	}
	return retNum;
};
console.log(romanToInt("MCMXCVI"));
console.log(romanToInt("VI"));
console.log(romanToInt("III"));
console.log(romanToInt("XIX"));
console.log(romanToInt("CM"));
