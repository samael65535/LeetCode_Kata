/**
 * @param {number} n
 * @return {number}
 */


// var isPrime1 = function (n) {
// 	if (n == 2) return true
// 	if (n <= 1) return false
// 	let sqrt = parseInt(Math.sqrt(n))
// 	for (let i = 2; i <= sqrt; i++) {
// 		if (n % i == 0) return false
// 	}
// 	return true
// }
//
//
// let res = [0, 0, 1]
// let primeFlagList = [0, 0, 1]
//
// var isPrime = function(n) {
// 	if(primeFlagList[n] != undefined) return primeFlagList[n]
// 	if(n === 2 || n === 3) {
// 		return true
// 	}
// 	if((n % 6 !==1) && (n % 6 !== 5)){
// 		return false
// 	}
// 	var sqrt_n =  Math.sqrt(n)
// 	for(var i = 3; i <=  sqrt_n; i+=2){
// 		if(n % i === 0) {
// 			return false
// 		}
// 	}
// 	return true
// }
// var countPrimes1 = function (n) {
// 	if (n < res.length) return res[n-1] || 0
// 	for (let i = res.length; i <= n; i++) {
// 		if (isPrime(i)) {
// 			primeFlagList[i] = 1
// 			res.push(res[i - 1] + 1)
// 		} else {
// 			primeFlagList[i] = 0
// 			res.push(res[i - 1])
// 		}
// 	}
// 	return res[n-1]
// };

var mem = [0, 0, 0]
var countPrimes = function(n) {
	if(mem[n-1] != undefined) return mem[n-1]
	const primes = Array(n).fill(true)
	let count = 0
	for (let i = 2; i < n; i++) {
		if (primes[i]) {
			count++
			mem[i] = count
			for (let j = 2; i * j < n; j++) {
				primes[i * j] = false
			}
		}
	}

	return count
};


module.exports = countPrimes
