/**
 * 给定一个整数，将其转化为7进制，并以字符串形式输出。
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
	let isMinus = num < 0
	num = Math.abs(num)
	let ans = ''
	do {
		ans = num % 7 + ans
		num = parseInt(num / 7)
	}while (num > 0)
	if (isMinus) return '-' + ans
	return ans
};
var convertToBase7 = function(num) {
	// 原生方法
	return (num).toString(7);
};
//console.log(convertToBase7(100))
//console.log(convertToBase7(-1))
