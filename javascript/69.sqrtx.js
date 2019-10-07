/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
// 	if (x == 0) return 0
// 	if (x == 1) return 1
// 	for(let i = 0; i <= x / 2; i++) {
// 		if (i * i == x) {
// 			return i
// 		}
// 		if (i * i > x) {
// 			return i-1
// 		}
// 	}
// 	return parseInt(x / 2)
// };

var mySqrt = function(x) {
	if (x == 0) return 0
	if (x == 1) return 1
	let left = 0
	let right = parseInt(x / 2) + 1
	while(left < right) {
		let mid = parseInt((right + left + 1) / 2)
		let sqrt = mid * mid
		if (sqrt <= x) {
			left = mid
		} else {
			right = mid - 1
		}
	}
	return parseInt(left)
}
// console.log(mySqrt(7))
// console.log(mySqrt(9))
// console.log(mySqrt(10))
