/**
 * @param {number} n
 * @return {string}
 */

let map = ["1"]
for (let i = 0; i < 30; i++) {
	let count = 0;
	let prevStr = map[i]
	let curNum = 0
	let str = ''
	for (let j = 0; j <= prevStr.length; j++) {
		if (j == 0) {
			curNum = 1
			curNum = prevStr[j]
		}
		if (curNum != prevStr[j]) {
			str += count+''+curNum
			curNum = prevStr[j]
			count = 1
		} else {
			count++
		}

	}
	map.push(str)
}
var countAndSay = function (n) {
	return map[n-1]
};

//console.log(countAndSay(1))
