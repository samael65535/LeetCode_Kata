/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
	let dic = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
	let list = s.split('')
	return list.reduce((acc, cur, index) => {
		// acc+cur
		// *2 是把上次的累加也减了
		let c = list[index - 1];
		if(cur == 'V' || cur =='X') {
			if(c == 'I') {
				acc -= dic[c] * 2
			}
		} else if(cur == 'L' || cur =='C') {
			if(c == 'X') {
				acc -= dic[c] * 2
			}
		} else if(cur == 'D' || cur =='M') {
			if(c == 'C') {
				acc -= dic[c] * 2
			}
		}
		acc += dic[cur]
		return acc
	}, 0)
};
module.exports = romanToInt
