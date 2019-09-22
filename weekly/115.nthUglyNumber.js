/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// 丑数是可以被 a 或 b 或 c 整除的正整数。
var nthUglyNumber = function (n, a, b, c) {
	let arr = [a, b, c]
	arr.sort((a, b) => a - b)
	[a , b, c ]= arr[0], arr[1], arr[2]
	let i = 1
	let counter = 1
	while (true) {
		for(let ia = i * a; ia < i*b && ia < i*c; ia += a) {
			if(counter == n) {
				return ia
			}
			counter++
		}

		for(let ib = i * b; ib < i*c; ib += b) {
			if(counter == n) {
				return ib
			}
			counter++
		}
		if(counter == n) {
			return i*c
		}
		counter++
		i++
	}
};

 console.log(nthUglyNumber(3, 2, 3, 5))
  console.log(nthUglyNumber(4, 2, 3, 4))
 console.log(nthUglyNumber(5, 2, 11, 13))
console.log(nthUglyNumber(1000000000, 2, 217983653, 336916467))


