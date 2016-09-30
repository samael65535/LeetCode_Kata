/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	if (n == 0) return 1
	if (n < 0) {
		return 1 / myPow(x, -n);
	} else {
		if (n%2 == 0) {
			var ret = myPow(x, n/2);
			return ret * ret;
		} else {
			var ret = myPow(x, (n-1)/2);
			return ret * ret * x;
		}
	}
	return ret;
};

console.log(myPow(34.00515, -3));